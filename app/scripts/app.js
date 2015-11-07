'use strict';

/**
 * @ngdoc overview
 * @name chumApp
 * @description
 * # chumApp
 *
 * Main module of the application.
 */
angular
  .module('chumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
