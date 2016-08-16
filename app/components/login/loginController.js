'use strict';

/**
 * @ngdoc function
 * @name gabitosoft.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of gabitosoft
 */

angular.module('gabitosoft')
  .controller('LoginCtrl', function ($location) {

    var doLogin = function () {
      console.log('click event');
      $location.path('/dashboard');
    }
});
