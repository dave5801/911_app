var routerApp = angular.module('routerApp', ['ui.router', 'ngAnimate', 'ui.bootstrap',
 'userApp']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html',
            controller:  'responseController',
            controllerAs: 'resCon'

        })

        // POSITION PAGE=================================
        .state('user', {
            url: '/user',
            views: {
                '': { templateUrl: 'pages/user.html',
                      controller: 'userController' },

            }

        })

});
