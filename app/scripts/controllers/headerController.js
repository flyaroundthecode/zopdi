'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.controller('headerController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
    $rootScope.isNavVisible = false;

    $scope.toggleNavigation = function(){
    	$rootScope.isNavVisible = !$scope.isNavVisible;
    };
    
}]);
