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

    function init() {
      // $scope.application = applicationFactory.getApplication('' + $routeParams.id);
      self.mode = $attrs.mode;
      console.log(self.mode);
    }

    function back () {
      $location.path('/overview');
    }

    function signOut () {
      $location.path('/login');
    }
  }
})();
