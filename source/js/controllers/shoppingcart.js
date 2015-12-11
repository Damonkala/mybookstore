'use strict';

var app = angular.module('paymentApp');

app.controller('shoppingcartCtrl', function($scope, $state, $localStorage, $http, ENV) {
	// var	user = $scope.$storage.id
	// console.log(user)
  //   UserService.cart(user)

		$http.get('/users/cart/' + $scope.$storage.id)
    .then(function(res){
			$scope.total = 0;
			$scope.books = []
			res.data.cart.map(book => {
				console.log(book.price)
				$scope.books.push(book)
				$scope.total += book.price;
			})
			// console.log(arr)
			$scope.cartItems = res.data.cart
			console.log("DATA", $scope.cartItems)
			console.log("Total", $scope.total)
			console.log("Books", $scope.books)
    }, function(err) {
      console.error(err);
    });
		$scope.doCheckout = function(tokenObj) {
			$http.post(`${ENV.API_URL}/checkout`, {
				tokenObj: tokenObj,
				total: $scope.total
			})
			.then(function(res) {
				console.log('res:', res);
				swal("Your purchase has been processed")
			}, function(err) {
				console.log('err:', err);
			})
		};
});
