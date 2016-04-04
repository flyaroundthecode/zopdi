'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.factory('DataService', ['$http', function($http){

	return function(baseUrl){

		var dataService = {};
		
		dataService.baseUrl = baseUrl || '/api/test/';

		dataService.handleSuccess = function(response) {
        	return {
        		response: response,
        		isError: false,
        		errorMessage: ''
        	};
    	};

    	dataService.handleError = function (response, errorMessage) {
	        return {
	        	response: response,
	        	isError: true,
	        	errorMessage: errorMessage
	        };
	    };

		dataService.getAll = function() {
			console.log('calling dataService.getAll');
			return $http.get(dataService.baseUrl).then(dataService.handleSuccess, dataService.handleError({}, 'Error in getting all data'));
		};

		dataService.getById = function(id) {
			console.log('calling dataService.getById');
			return $http.get(dataService.baseUrl+id).then(dataService.handleSuccess, dataService.handleError({}, 'Error in getting data by id'));
		};

		dataService.save = function(dataObj) {
			console.log('calling dataService.save');
			return $http.post(dataService.baseUrl, dataObj).then(dataService.handleSuccess, dataService.handleError({}, 'Error in saving data'));
		};

		dataService.update = function(dataObj) {
			console.log('calling dataService.update');
			return $http.put(dataService.baseUrl+dataObj.id, dataObj).then(dataService.handleSuccess, dataService.handleError({}, 'Error in updating data'));
		};

		dataService.delete = function(id) {
			console.log('calling dataService.delete');
			return $http.delete(dataService.baseUrl+id).then(dataService.handleSuccess, dataService.handleError({}, 'Error in deleting data by id'));
		};

		return dataService;
	};
}]);