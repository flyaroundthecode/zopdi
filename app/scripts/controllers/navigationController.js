'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.controller('navigationController', ['$scope', 'navigationConfig', '$rootScope',
  function ($scope, navigationConfig, $rootScope) {
    
    $scope.navigationConfig = navigationConfig;

    $scope.navSelectionHandler = function(navItem, navDetails) {
      $scope.selectedNavItem = navItem;
      if(angular.isUndefined(navDetails.subNav)) {
      	$rootScope.isNavVisible = !$scope.isNavVisible;
      }
      if(angular.isDefined(navDetails.isSubNavVisible)) {
        navDetails.isSubNavVisible = !navDetails.isSubNavVisible;
      }
    };

    $scope.subNavSelectionHandler = function($event) {
    	$event.stopPropagation();
    	$rootScope.isNavVisible = !$scope.isNavVisible;
    };
    
}]);
