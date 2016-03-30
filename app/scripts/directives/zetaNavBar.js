'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.directive('zetaNavBar', ['$timeout', function ($timeout) {

	return {
		restrict: 'A',
		link: function(scope, element){
			$timeout(function(){
				element.click(function () {
					//angular.element('#toggle ul ul').slideUp();
					element.find('ul').slideToggle();
				});
			});
		}
	};
    
}]);