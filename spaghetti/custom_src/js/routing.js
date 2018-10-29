var app = angular.module('switchApp', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider
      .when('/menu', {
        templateUrl: '/spaghetti/public_html/injected_pages/menu.html',
        controller: 'menuController'
      })
        .when('/menu/appetizers', {
          templateUrl: '/spaghetti/public_html/injected_pages/appetizers.html',
          controller: 'menuAppetizersController'
        })
      .when('/games', {
        templateUrl: '/spaghetti/public_html/injected_pages/games.html',
        controller: 'gamesController'
      })
      .when('/loyalty', {
        templateUrl: '/spaghetti/public_html/injected_pages/loyalty.html',
        controller: 'loyaltyController'
      })

});

app.controller('menuController', function($scope) {
  $scope.pageName = "Menu Page";
});

app.controller('menuAppetizersController', function($scope) {
  $scope.pageName = "Appetizers Page";
});

app.controller('gamesController', function($scope) {
  $scope.pageName = "Games Page";
});

app.controller('loyaltyController', function($scope) {
  $scope.pageName = "Loyalty Page";
});
