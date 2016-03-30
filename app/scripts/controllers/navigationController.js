'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.controller('navigationController', ['$scope', 'navigationConfig', 
  function ($scope, navigationConfig) {
    
    $scope.navigationConfig = navigationConfig;

    $scope.isNavVisible = false;

    $scope.navSelectionHandler = function(navItem, navDetails){
      $scope.selectedNavItem = navItem;
      if(angular.isDefined(navDetails.isSubNavVisible)){
        navDetails.isSubNavVisible = navDetails.isSubNavVisible ? false : true;
      }
    };
    
}]);
