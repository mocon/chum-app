'use strict';

/**
 * @ngdoc function
 * @name chumApp.service:getContacts
 * @description
 * # getContacts
 * Service to get contacts for chumApp
 */
angular.module('chumApp')
  .service('ContactsService', function ($http, $q) {
    /* Sample data (nod: json-generator.com), eventually will come from HTTP request */
    var userContacts = [
		  {
		    "_id": "563e73ea92463ac0dc61e63e",
		    "index": 0,
		    "name": "Sosa Hyde",
		    "email": "sosahyde@datagene.com",
		    "phone": "+1 (800) 456-3107",
		    "weight": 10
		  },
		  {
		    "_id": "563e73eaf244a602c263bfcb",
		    "index": 1,
		    "name": "Calderon Cantrell",
		    "email": "calderoncantrell@datagene.com",
		    "phone": "+1 (996) 453-3783",
		    "weight": 4
		  },
		  {
		    "_id": "563e73ea0343b1812a960c3b",
		    "index": 2,
		    "name": "Sherman Figueroa",
		    "email": "shermanfigueroa@datagene.com",
		    "phone": "+1 (868) 497-2541",
		    "weight": 8
		  },
		  {
		    "_id": "563e73eaf3d42727a591a230",
		    "index": 3,
		    "name": "Hollie Kaufman",
		    "email": "holliekaufman@datagene.com",
		    "phone": "+1 (982) 558-2909",
		    "weight": 10
		  },
		  {
		    "_id": "563e73eac64ebd9412f61961",
		    "index": 4,
		    "name": "Edwards Wagner",
		    "email": "edwardswagner@datagene.com",
		    "phone": "+1 (967) 556-3861",
		    "weight": 9
		  },
		  {
		    "_id": "563e73ea0c18c5e2d096c807",
		    "index": 5,
		    "name": "Howard Mayo",
		    "email": "howardmayo@datagene.com",
		    "phone": "+1 (867) 498-3786",
		    "weight": 0
		  },
		  {
		    "_id": "563e73ea73b5b9e0cf7e3e42",
		    "index": 6,
		    "name": "Alexandria Rivera",
		    "email": "alexandriarivera@datagene.com",
		    "phone": "+1 (896) 455-2162",
		    "weight": 5
		  },
		  {
		    "_id": "563e73ea093cd107601241c0",
		    "index": 7,
		    "name": "Hernandez Foley",
		    "email": "hernandezfoley@datagene.com",
		    "phone": "+1 (819) 419-3810",
		    "weight": 9
		  },
		  {
		    "_id": "563e73ea338f01e2d1c8f468",
		    "index": 8,
		    "name": "Baxter Baldwin",
		    "email": "baxterbaldwin@datagene.com",
		    "phone": "+1 (883) 447-2642",
		    "weight": 7
		  },
		  {
		    "_id": "563e73ea1f6e1b8ce52d0b93",
		    "index": 9,
		    "name": "Woods Blackwell",
		    "email": "woodsblackwell@datagene.com",
		    "phone": "+1 (934) 532-2197",
		    "weight": 1
		  }
		];
		
		this.getContacts = function(){
			return userContacts;
		}
  });
