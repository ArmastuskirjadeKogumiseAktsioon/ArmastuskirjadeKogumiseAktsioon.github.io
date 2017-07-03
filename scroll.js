(function () {
	'use strict';

	// If the user has a mobile device or IE, don't bother and prefer performance
	var ua = window.navigator.userAgent;
	var isOldIE = ua.indexOf("MSIE ") > 0;
	var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
	var isEdge = ua.indexOf('Edge/') > 0;
	// A lazy proxy for mobiles
	var isSmall = (window.innerWidth <= 800 && window.innerHeight <= 600);
	if (isOldIE || isIE11 || isEdge || isSmall) {
		return;
	}

	var blocks = Array.prototype.slice.call(document.querySelectorAll('.image-block'));
	var images = Array.prototype.slice.call(document.querySelectorAll('.image-block .image'));

	var windowHeight = 0;
	var offsets = [];
	var blockHeights = [];
	var imageHeights = [];
	var ratios = [];
	var maxPositionReciprocals = [];
	
	// Precalculate all the things we can
	function updateDeps() {
		windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		imageHeights = images.map(function (image) {
			return image.offsetHeight;
		});
		blocks.forEach(function (block, index) {
			offsets[index] = block.offsetTop;
			blockHeights[index] = block.offsetHeight;
			ratios[index] = 100.0 * block.offsetHeight / imageHeights[index];
		});
		maxPositionReciprocals = offsets.map(function (offset, index) {
			var blockHeight = blockHeights[index];
			return 1.0 / Math.max(offset, windowHeight + blockHeight);
		});
		// Ensure the handle is up-to-date once we're done
		scrollHandler();
	}

	function scrollHandlerInner() {
		var scroll = window.scrollY;
		offsets.forEach(function (offset, index) {
			var blockHeight = blockHeights[index];
			var block = blocks[index];
			var ratio = ratios[index];
			var maxPositionReciprocal = maxPositionReciprocals[index];

			var position = scroll - offset + windowHeight;
			var preoffset = position * maxPositionReciprocal
			if (preoffset < 0 || preoffset > 1.0) return;

			// Offset from [0.0, 1.0] to [-0.5, 0.5]
			var delta = preoffset - 0.5;		

			var image = images[index];
			image.style.transform = 'translateY(' + ratio * delta + '%)'
		});
	}

	var scrollHandler = window.requestAnimationFrame ? function () {
		window.requestAnimationFrame(scrollHandlerInner);
	} : scrollHandlerInner;
	window.addEventListener('scroll', scrollHandler);

	updateDeps();
	var resizeThrottle = null;
	window.addEventListener('resize', function () {
		if (resizeThrottle) return;
		resizeThrottle = setTimeout(function () {
			resizeThrottle = null;
			updateDeps();
		}, 100);
	});
})();