angular.module('DirectiveTest', [])
.controller('CustomerController', function($scope) {
  $scope.info = [{firstName: 'mike', lastName: 'caputo'}, {firstName: 'geoff', lastName: 'young'}]
})
.directive('myCustomer', function() {
  return {
    restrict: 'E',
    scope: {
      customerInfo: '=info'
    },
    template: 'name: {{customerInfo.firstName}} {{customerInfo.lastName}}'
  }
});