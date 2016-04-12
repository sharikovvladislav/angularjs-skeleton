/**
 * Created by Vlad on 12.04.2016.
 */

var module = angular.module('MyApp', []);
module.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];
function MyCtrl ($scope) {
  $scope.onInit = function () {
    debugger;
  }
}