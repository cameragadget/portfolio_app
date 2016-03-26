(function(){
  'use strict';

  angular
    .module('app')
    .config(appRoutes);

  appRoutes.$inject = ['$urlRouterProvider', '$stateProvider']

  function appRoutes($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state("main", {
        url: "/",
        templateUrl: "/js/app/main.html"
      })
      .state('portfolio', {
        url: "/portfolio",
        templateUrl: "/js/app/portfolio/portfolio.html"
      })
      .state('about', {
        url: "/about",
        templateUrl: "/js/app/about/about.html"
      });


      $urlRouterProvider.otherwise('/');

  }





})();
