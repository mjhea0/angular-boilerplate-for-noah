(function() {

  'use strict';

  angular
    .module('appName.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
