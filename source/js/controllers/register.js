'use strict';

var app = angular.module('paymentApp');

app.controller('registerCtrl', function($scope, $state, UserService) {

  $scope.submit = function(user) {
    if(user.password !== user.password2){
      swal('Error:', 'Passwords do not match.', 'error');
      return;
    }
    UserService.register(user)
    .then(function(data){
      $scope.$storage.myToken = data.token;
      $state.go('login');

    }, function(err) {
      console.error(err);
    });
  }
});
