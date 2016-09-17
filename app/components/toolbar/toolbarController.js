(function () {

  'use strict';
  /**
   * @ngdoc function
   * @name gabitosoft.controller:ToolbarCtrl
   * @description
   * # ToolbarCtrl
   * Controller of gabitosoft
   */

  angular.module('gabitosoft').controller('ToolbarCtrl', ToolbarCtrl);

  function ToolbarCtrl ($location, $attrs) {
    var self = this;
    self.username = "";
    self.password = "";

    self.init = function() {
      // $scope.application = applicationFactory.getApplication('' + $routeParams.id);
      self.mode = $attrs.mode;
    };

    self.back = function() {
      $location.path('/overview');
    };

    self.signOut = function () {
      $location.path('/login');
    };

    self.openMenu = function($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };
  }
})();
