'use strict';

/**
 * @ngdoc function
 * @name chumApp.directive:mainMenu
 * @description
 * # MainMenu
 * Directive for the chumApp main menu
 */
angular.module('chumApp')
  .directive('mainMenu', function ($location) {
    return {
	    restrict: 'AE',
	    scope: true,
	    replace: false,
	    templateUrl: 'views/main-menu.html',
	    link: function(scope, elem, attrs){
		    scope.currentPath = $location.path();
		    scope.$on('$locationChangeSuccess', function () {
	        scope.currentPath = $location.path();
		    });
		    $(".navbar-nav li a").click(function(event) {
			    $(".navbar-collapse").collapse('hide');
			  });
	    }
    };
  });