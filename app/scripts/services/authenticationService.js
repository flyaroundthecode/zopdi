'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.service('authenticationService', ['$http', '$rootScope', 'userService', function($http, $rootScope, userService){

	var authenticationService = {};

	authenticationService.authenticate = function(username, password, authenticationSuccessHandler, authenticationFailureHandler) {
		var isUserAuthentic = false;
		var userData = {};
		userService.getAll().then(function(responseObj){
			console.log(responseObj);
			if(!responseObj.isError) {
				responseObj.response.data.some(function(eachUser){
					if(eachUser.username === username && eachUser.password === password) {
						userData = eachUser;
						isUserAuthentic = true;
					}
					return isUserAuthentic;
				});
				authenticationSuccessHandler(isUserAuthentic, userData);
			} else {
				authenticationFailureHandler(responseObj);
			}

		});
	};

	return authenticationService;

}]);