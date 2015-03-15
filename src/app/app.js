'use strict';

angular.module('madlibs', ['ngResource', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/gen', {
        templateUrl: 'app/gen/gen.html',
        controller: 'GenCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
