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
  });
