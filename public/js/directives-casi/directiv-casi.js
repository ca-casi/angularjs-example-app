angular.module('directiveCasi', [])
.directive('showName', function() {
	var ddo = {};
	ddo.restric = "AE";
	ddo.scope = {
		name: '@'
	};
	ddo.templateUrl = 'js/directives-casi/show-name.html';
	return ddo;
});