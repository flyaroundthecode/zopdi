'use strict';

/**
 * @ngdoc function
 * @name zetaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zetaApp
 */
var zetaApp = angular.module('zetaApp');

zetaApp.controller('menuController', ['$scope', 'menuConfig', function ($scope, menuConfig) {
    $scope.menuConfig = menuConfig;

    $scope.categories = [{ 
    title: 'Computers',
    categories: [
      {
        viewName: 'Laptops',
        categories: [
          {
            title: 'Ultrabooks'
          },
          {
            title: 'Macbooks'            
          }
        ]
      },

      {
        title: 'Desktops'
      },

      {
        title: 'Tablets',
        categories: [
          { 
            title: 'Apple'
          },
          {
            title: 'Android'
          }
        ]        
      }
    ]
  },

  {
    title: 'Printers'
  }];
}]);
