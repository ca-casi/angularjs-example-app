(function(){
    'use strict';

    function ngDialog() {
      var $service = this;

      $service.open = function() {
        alert('OPENED');
      };

      return $service;
    }

    angular.module('ngDialogModule', []).service('ngDialog', ngDialog);
}());