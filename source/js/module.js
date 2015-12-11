'use strict';

var app = angular.module('paymentApp', ['ui.router', 'ngStorage', "stripe.checkout"]);

app.constant('ENV', {
  API_URL: 'https://salty-coast-6294.herokuapp.com'
});

app.run(function($rootScope, $localStorage) {
  $rootScope.$storage = $localStorage;
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', { url: '/', templateUrl: 'templates/home.html'})
    .state('login', { url: '/login', templateUrl: 'templates/login.html', controller: 'loginCtrl'})
    .state('register', { url: '/register', templateUrl: 'templates/register.html', controller: 'registerCtrl'})

    .state('shoppingcart', { url: '/shoppingcart', templateUrl: 'templates/shoppingcart.html', controller: 'shoppingcartCtrl'})

    .state('books', { url: '/books', templateUrl: 'templates/books/layout.html', abstract: true })
    .state('books.index', { url: '/', templateUrl: 'templates/books/booksIndex.html', controller: 'booksIndexCtrl'})
    .state('books.show', { url: '/{bookId}', templateUrl: 'templates/books/booksShow.html', controller: 'booksShowCtrl'})


});
