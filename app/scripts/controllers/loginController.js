'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.controller('loginController', ['$scope', '$rootScope', 'authenticationService', '$state', 
  function ($scope, $rootScope, authenticationService, $state) {
    $rootScope.isLoggedIn = false;
    $scope.dataLoading = false;
    
    $scope.loginClickHandler = function(){
      $scope.dataLoading = true;
      authenticationService.authenticate($scope.username, $scope.password, $scope.authenticationSuccessHandler);
    };

    $scope.authenticationSuccessHandler = function(isUserAuthentic, userDetails){
      $scope.dataLoading = false;
      if(isUserAuthentic){
        $rootScope.userDetails = userDetails;
        $state.go('home');
      } else {
        console.log('user is not authentic to login');
      }
    };

    $scope.authenticationFailureHandler = function(errorDetails){

    };

}]);
