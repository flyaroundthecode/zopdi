'use strict';

var zetaApp = angular.module('zetaApp');
 
zetaApp.controller('aboutController', ['$scope',function ($scope){
	$scope.textLimit = 200;
	$scope.isTextExpanded = false;

	$scope.aboutUsText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida vel erat eu vestibulum. Maecenas malesuada, ante at venenatis porta, erat risus porta massa, ac vestibulum libero ex id mauris. Sed faucibus arcu eget lorem vestibulum congue. Phasellus at elit non dolor semper eleifend. Donec nec maximus purus. Donec pretium orci sed ullamcorper scelerisque. Nullam quis elit tristique, interdum eros quis, tincidunt tortor. Fusce odio enim, maximus in sollicitudin vitae, fermentum in elit. Aliquam pretium odio condimentum, fringilla risus in, mollis mi. Phasellus ullamcorper enim vehicula mi commodo laoreet.Phasellus ullamcorper enim vehicula mi commodo.';

	$scope.expandText = function(){
		$scope.textLimit = $scope.aboutUsText.length;
		$scope.isTextExpanded = true;
	}

	$scope.shrinkText = function(){
		$scope.textLimit = 200;
		$scope.isTextExpanded = false;
	}
}]);
