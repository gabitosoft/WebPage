(function () {

  'use strict';
  /**
   * @ngdoc function
   * @name gabitosoft.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of gabitosoft
   */

  angular.module('gabitosoft').controller('LoginCtrl', LoginCtrl);

  function LoginCtrl ($location) {
    var self = this;
    self.username = "";
    self.password = "";

    self.doLogin = doLogin;

    function doLogin () {
      $location.path('/dashboard');
    }
  }
})();
