'use strict';

var app = angular.module('paymentApp');

app.controller('booksIndexCtrl', function($scope, $state, $http, BookService, $rootScope) {
  BookService.index()
  .then(function(res) {
    $scope.books = res.data;
  }, function(err) {
    console.error(err);
  });
  $scope.addToCart = function(book){
    var upd8 = {};
    upd8.book = book
    upd8.id = $scope.$storage.id
    $http.put('/users', upd8)
    .then(function(res) {
      console.log("Added")
    })
    console.log(book)
    console.log($scope.$storage.id)
  }
});
