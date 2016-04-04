'use strict';

/**
 * @ngdoc function
 * @name zetaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zetaApp
 */
angular.module('zetaApp')
  .controller('MainCtrl', ['$scope', 'userService', function ($scope, userService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    userService.getAll();
    userService.getUserByName();

    console.log(userService.baseUrl);
  }]);
