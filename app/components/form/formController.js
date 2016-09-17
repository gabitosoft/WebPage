(function () {

  'use strict';
  /**
   * @ngdoc function
   * @name gabitosoft.controller:FormCtrl
   * @description
   * # FormCtrl
   * Controller of gabitosoft
   */

  angular.module('gabitosoft').controller('FormCtrl', FormCtrl);

  function FormCtrl ($location, $http) {
    var self = this;
    self.forms = [];

    self.getForms = function () {
      $http.get('definitions/forms.json')
       .then(function (response) {
            self.forms = response.data.nodes;
             console.log(response.data.nodes);
       }, function (error) {
           console.log('Error', error);
       });
    };

    self.openMenu = function($mdOpenMenu, ev) {
      ev.stopPropagation();
      $mdOpenMenu(ev);
    };

    self.edit = function(id) {
      console.log('Edit data');
    };

    self.share = function(id) {
      console.log('share data');
    };

    self.delete = function(id) {
      console.log('delete data');
    };

    self.new = function() {
      console.log('New data');
    };
  }
})();
