var app = angular.module('switchApp', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/menu', {
        templateUrl: '/public_html/injected_pages/menu.html',
        controller: 'menuController'
      })
      .when('/games', {
        templateUrl: '/public_html/injected_pages/games.html',
        controller: 'gamesController'
      })
      .when('/loyalty', {
        templateUrl: '/public_html/injected_pages/loyalty.html',
        controller: 'loyaltyController'
      })
    $locationProvider.hashPrefix('');
});

app.controller('menuController', function($scope) {
  $scope.pageName = "Menu Page";
});

app.controller('gamesController', function($scope) {
  $scope.pageName = "Games Page";
});

app.controller('loyaltyController', function($scope) {
  $scope.pageName = "Loyalty Page";
});
