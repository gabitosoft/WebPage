(function () {

  'use strict';

  /**
   * @ngdoc overview
   * @name routesApp
   * @description
   * # gabitosoft router
   *
   * Route module of the application.
   */

  angular
    .module('routesApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/edit/:id', {
          templateUrl: 'app/components/form/editForm.html'
        })
        .when('/form', {
          templateUrl: 'app/components/form/form.html'
        })
        .when('/templates', {
          templateUrl: 'app/components/templatesView/templatesView.html'
        })
        .when('/preview/:id', {
          templateUrl: 'app/components/form/viewForm.html'
        })
        .when('/dashboard', {
          templateUrl: 'app/components/dashboard/dashboard.html'
        })
        .when('/login', {
          templateUrl: 'app/components/login/login.html'
        })
        .otherwise({
          redirectTo: '/login'
        });
    }]);
})();
