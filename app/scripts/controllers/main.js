'use strict';

/**
 * @ngdoc function
 * @name ideaOneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ideaOneApp
 */
angular.module('ideaOneApp')
  .controller('MainCtrl', function ($scope) {
    $scope.ideas = [
      {
      	id: 1,
      	title: 'Great Idea',
      	desc: 'test description here!',
      	votes: 5
      },{
      	id: 2,
      	title: 'Another Great Idea',
      	desc: 'test description here!',
      	votes: 8
      },{
      	id: 3,
      	title: 'Best Great Idea',
      	desc: 'test description here!',
      	votes: 5
      },{
      	id: 4,
      	title: 'My Great Idea',
      	desc: 'test description here!',
      	votes: 6
      },{
      	id: 5,
      	title: 'Great Idea of all time',
      	desc: 'test description here!',
      	votes: 12
      },
    ];

    $scope.xFunction = function() {
      	return function(d) {
        return d.title;
      };
    }
    $scope.yFunction = function() {
      	return function(d) {
        return d.votes;
      };
      }
	$scope.descriptionFunction = function() {
		return function(d) {
		return d.key;
		};
		}
    
  });
