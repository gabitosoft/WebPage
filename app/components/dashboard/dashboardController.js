(function () {

  'use strict';
  /**
   * @ngdoc function
   * @name gabitosoft.controller:DashCtrl
   * @description
   * # DashCtrl
   * Controller of gabitosoft
   */

  angular.module('gabitosoft').controller('DashCtrl', DashCtrl);

  function DashCtrl ($location) {
    var self = this;
    self.username = "";
    self.password = "";

    function goApp () {
      $location.path('/dashboard');
    }
  }
})();
