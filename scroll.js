(function () {
	'use strict';

	var height;
	var blocks;
	var images;
	var offsets;
	var blockHeights;
	var imageHeights;
	var ratios;
	
	// Precalculate all the things we can
	function updateDeps() {
		height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		blocks = Array.prototype.slice.call(document.querySelectorAll('.image-block'));
		images = Array.prototype.slice.call(document.querySelectorAll('.image-block .image'));
		offsets = blocks.map(function (block) {
			return block.offsetTop;
		});
		blockHeights = blocks.map(function (block) {
			return block.offsetHeight;
		});
		imageHeights = images.map(function (image) {
			return image.offsetHeight;
		});
		ratios = blockHeights.map(function (blockHeight, index) {
			return (100 * blockHeight) / imageHeights[index];
		});
	}

	function scrollHandlerInner() {
		// console.log(':::');
		var scroll = window.scrollY;
		offsets.forEach(function (offset, index) {
			var blockHeight = blockHeights[index];
			var block = blocks[index];
			var imageHeight = imageHeights[index];
			var ratio = ratios[index];

			var position = scroll - offset + height;
			var maxPosition = Math.max(offset, height + blockHeight);
			// console.log(position, maxPosition);
			// Offset from [0.0, 1.0] to [-0.5, 0.5]
			var delta = Math.max(Math.min(position / maxPosition, 1.0), 0.0) - 0.5;		

			var image = images[index];
			image.style.transform = 'translateY(' + ratio * delta + '%)'
		});
	}

	var scrollHandler = window.requestAnimationFrame ? function () {
		window.requestAnimationFrame(scrollHandlerInner);
	} : scrollHandlerInner;

	updateDeps();
	window.addEventListener('resize', updateDeps);
	scrollHandler();
	window.addEventListener('scroll', scrollHandler);
})();