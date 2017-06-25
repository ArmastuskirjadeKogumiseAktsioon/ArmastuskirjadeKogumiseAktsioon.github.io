(function () {
	'use strict';

	var request = new XMLHttpRequest();
	request.open('GET', 'updates.md', true);
	request.onload = function () {
		if (request.status === 200) {
			console.log(request.response);
		}
	}
	request.send();
})();