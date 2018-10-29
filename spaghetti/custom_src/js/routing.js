var app = angular.module('switchApp', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider
    // Staff routing and its subpages
    .when('/staff', {
      templateUrl: '/spaghetti/public_html/injected_pages/staff/staff_login.html',
      controller: 'staffController'
    })

    // Menu routing and its subpages
      .when('/menu', {
        templateUrl: '/spaghetti/public_html/injected_pages/menu/menu.html',
        controller: 'menuController'
      })
              .when('/menu/appetizers', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/appetizers.html',
                controller: 'menuAppetizersController'
              })

      // Games routing and its subpages
      .when('/games', {
        templateUrl: '/spaghetti/public_html/injected_pages/games/games.html',
        controller: 'gamesController'
      })

      // Loyalty routing and its subpages
      .when('/loyalty', {
        templateUrl: '/spaghetti/public_html/injected_pages/loyalty/loyalty.html',
        controller: 'loyaltyController'
      })

      // Your Order routing and its subpages
      .when('/your_order', {
        templateUrl: '/spaghetti/public_html/injected_pages/your_order/your_order.html',
        controller: 'your_orderController'
      })

      // Your Bill routing and its subpages
      .when('/your_bill', {
        templateUrl: '/spaghetti/public_html/injected_pages/your_bill/your_bill.html',
        controller: 'your_billController'
      })

      // Template routing
      .when('/template', {
        templateUrl: '/spaghetti/public_html/injected_pages/template.html',
        controller: 'templateController'
      })

});

// Controllers for all pages
app.controller('staffController', function($scope) {
  $scope.pageName = "Staff Login Page";
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

app.controller('your_orderController', function($scope) {
  $scope.pageName = "Your Order Page";
});

app.controller('your_billController', function($scope) {
  $scope.pageName = "Your Bill Page";
});

app.controller('templateController', function($scope) {
  $scope.pageName = "Template Page";
});
