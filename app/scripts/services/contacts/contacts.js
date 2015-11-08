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
		    "_id": "563f80a6de99b76e17a97706",
		    "name": "Cathleen Burch",
		    "email": "cathleenburch@sloganaut.com",
		    "phone": "+1 (810) 511-2927",
		    "weight": 0
		  },
		  {
		    "_id": "563f80a68d85957c4c9f3ebd",
		    "name": "Rosella Dotson",
		    "email": "roselladotson@sloganaut.com",
		    "phone": "+1 (932) 427-3969",
		    "weight": 9
		  },
		  {
		    "_id": "563f80a693b96e9e3dbd0879",
		    "name": "Petersen Shelton",
		    "email": "petersenshelton@sloganaut.com",
		    "phone": "+1 (830) 556-3205",
		    "weight": 5
		  },
		  {
		    "_id": "563f80a63503320c48754b61",
		    "name": "Marshall Griffin",
		    "email": "marshallgriffin@sloganaut.com",
		    "phone": "+1 (963) 583-2415",
		    "weight": 4
		  },
		  {
		    "_id": "563f80a6093be3896be99a6b",
		    "name": "Garrison Fields",
		    "email": "garrisonfields@sloganaut.com",
		    "phone": "+1 (833) 409-2886",
		    "weight": 0
		  },
		  {
		    "_id": "563f80a6a036e20826a545d0",
		    "name": "Gladys Lang",
		    "email": "gladyslang@sloganaut.com",
		    "phone": "+1 (910) 447-3624",
		    "weight": 8
		  },
		  {
		    "_id": "563f80a683873b24bce9c07e",
		    "name": "Cynthia Perry",
		    "email": "cynthiaperry@sloganaut.com",
		    "phone": "+1 (973) 550-3589",
		    "weight": 0
		  },
		  {
		    "_id": "563f80a6b332353927e33ad3",
		    "name": "Jannie Crosby",
		    "email": "janniecrosby@sloganaut.com",
		    "phone": "+1 (918) 511-3379",
		    "weight": 0
		  },
		  {
		    "_id": "563f80a652adc5fbf5b05675",
		    "name": "Booker McCullough",
		    "email": "bookermccullough@sloganaut.com",
		    "phone": "+1 (980) 556-3049",
		    "weight": 7
		  },
		  {
		    "_id": "563f80a67c02668fb4562db4",
		    "name": "Lena Downs",
		    "email": "lenadowns@sloganaut.com",
		    "phone": "+1 (912) 532-2715",
		    "weight": 0
		  },
		  {
		    "_id": "563f80a64dfeedfeae9c080a",
		    "name": "Jefferson Young",
		    "email": "jeffersonyoung@sloganaut.com",
		    "phone": "+1 (858) 404-2633",
		    "weight": 0
		  },
		  {
		    "_id": "563f80a69b374b23bca27efc",
		    "name": "Taylor Riley",
		    "email": "taylorriley@sloganaut.com",
		    "phone": "+1 (906) 522-3054",
		    "weight": 6
		  },
		  {
		    "_id": "563f80a6bcaf46322d48d05b",
		    "name": "Delaney Weiss",
		    "email": "delaneyweiss@sloganaut.com",
		    "phone": "+1 (919) 408-2132",
		    "weight": 0
		  },
		  {
		    "_id": "563f80a6f4297cd53df10fe2",
		    "name": "Beth Rivers",
		    "email": "bethrivers@sloganaut.com",
		    "phone": "+1 (853) 483-3629",
		    "weight": 0
		  },
		  {
		    "_id": "563f80a677a6fef14a33c1af",
		    "name": "Merritt Alvarado",
		    "email": "merrittalvarado@sloganaut.com",
		    "phone": "+1 (984) 402-2300",
		    "weight": 5
		  },
		  {
		    "_id": "563f80a602679d3bd0c575f9",
		    "name": "Sylvia Reed",
		    "email": "sylviareed@sloganaut.com",
		    "phone": "+1 (934) 522-3857",
		    "weight": 8
		  },
		  {
		    "_id": "563f80a61a50078283f1dd70",
		    "name": "Peters Frye",
		    "email": "petersfrye@sloganaut.com",
		    "phone": "+1 (991) 426-2367",
		    "weight": 0
		  },
		  {
		    "_id": "563f80a604c5f2b6967b5d4e",
		    "name": "Foster Ingram",
		    "email": "fosteringram@sloganaut.com",
		    "phone": "+1 (818) 496-2472",
		    "weight": 4
		  }
		];
		
		/* Update contacts */
		this.updateContacts = function(){
			/**/
		}
		
		/* Get all contacts */
		this.getContacts = function(){
			return userContacts;
		}
		
		/* Get all chums (contacts with weights) */
		this.getChums = function(){
			var contacts = Object.create(userContacts),
					chums = [];
			
			contacts.forEach(function(item, index, object){
				if (item.weight !== 0){
					chums.push(item);
				}
			});
			
			return chums;
		}
  });
