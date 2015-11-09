'use strict';

/**
 * @ngdoc function
 * @name chumApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chumApp
 */
angular.module('chumApp')
  .controller('ContactsCtrl', function (ContactsService) {
    /* Retrieve list of all contacts from ContactsService */
    this.userContacts = ContactsService.getContacts();
    
    this.total = this.userContacts.length;
    
    this.allRatings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    this.rateContact = function(index, newWeight){
	    this.userContacts.forEach(function(i){
		    if (i._id === index) {
			    i.weight = newWeight;
		    }
	    });
    };
  });
