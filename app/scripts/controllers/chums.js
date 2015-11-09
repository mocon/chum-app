'use strict';

/**
 * @ngdoc function
 * @name chumApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chumApp
 */
angular.module('chumApp')
  .controller('ChumsCtrl', function (ContactsService) {
    /* Retrieve list of all contacts from ContactsService */
    this.userChums = ContactsService.getChums();
    
    this.total = this.userChums.length;
    
    this.allRatings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    this.rateContact = function(index, newWeight){
	    this.userChums.forEach(function(i){
		    if (i._id === index) {
			    i.weight = newWeight;
		    }
	    });
    };
  });
