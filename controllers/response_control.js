var routerApp = angular.module('routerApp', ['ui.router', 'ngAnimate', 'ui.bootstrap',
 'page1App']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html'
        })
        
        
        // POSITION PAGE=================================
        .state('position', {
            url: '/position',
            views: {
                '': { templateUrl: 'pages/page1.html', 
                      controller: 'page1Controller' },

            }
            
        })

});


