(function() {
  'use strict';

  angular
    .module('twitterApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      /*.state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })*/
      .state('twitter', {
        url: '/',
        templateUrl: 'app/partials/twitter.html',
        controller: 'TwitterController',
        controllerAs: 't'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
