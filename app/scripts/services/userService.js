'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.service('userService', ['$http', 'DataService', function($http, DataService){

	var baseUrl = '/users.json';
	var userService = angular.extend({}, new DataService(baseUrl));

	userService.getUserByName = function(username){
		return $http.get(baseUrl + username).then(userService.handleSuccess, userService.handleError);
	};

	return userService;
}]);