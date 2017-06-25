(function () {
	'use strict';

	var request = new XMLHttpRequest();
	request.open('GET', 'updates.md', true);
	request.onload = function () {
		console.log(request.response);
	}
	request.send();
})();