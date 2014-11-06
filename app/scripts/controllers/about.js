'use strict';

/**
 * @ngdoc function
 * @name ideaOneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ideaOneApp
 */
angular.module('ideaOneApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
