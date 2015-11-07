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
  });
