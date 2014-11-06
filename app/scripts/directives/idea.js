'use strict';

/**
 * @ngdoc directive
 * @name ideaOneApp.directive:idea
 * @description
 * # idea
 */
angular.module('ideaOneApp')
  .directive('idea', function () {
    return {
		replace:true,
		templateUrl: 'views/directives/idea.html',
		restrict: 'E',
		scope: {
		idea: '='
      }
    };
  });
