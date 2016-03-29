'use strict';

/**
 * @ngdoc overview
 * @name zetaApp
 * @description
 * # zetaApp
 *
 * Main module of the application.
 */
angular
  .module('zetaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    //'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ncy-angular-breadcrumb'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/');
	  $stateProvider
	  	.state('home', {
	  		url: '/',
	  		templateUrl: 'views/main.html',
	  		controller: 'MainCtrl',
	  		ncyBreadcrumb: {
	  			label: 'Home'
	  		}
	  	})
	  	.state('about', {
	  		url: '/about',
	  		templateUrl: 'views/about.html',
	  		controller: 'AboutCtrl',
	  		ncyBreadcrumb: {
	  			parent: 'home',
	  			label: 'About'
	  		}
	  	});
  });
  /*.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/
