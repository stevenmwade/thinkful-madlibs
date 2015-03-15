(function(){
	'use strict';

	angular.module('madlibs')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope'];

	function MainCtrl($scope) {
		$scope.test = 'test';
	}


})();