angular.module('triviaApp', ['ui.router']).config(
    function( $stateProvider, $urlRouterProvider ) {
        $stateProvider
          .state({
            name: 'home',
            url: '/',
            component: 'questions',
          })
      
        $urlRouterProvider
          .otherwise('/');
      })