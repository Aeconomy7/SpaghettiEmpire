var app = angular.module('switchApp', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider
    // Staff routing and its subpages
    .when('/staff', {
      templateUrl: '/spaghetti/public_html/injected_pages/staff/staff_login.html',
      controller: 'staffController'
    })

              .when('/staff/manager', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/manager.html',
                controller: 'staffController'
              })
                    .when('/staff/manager/modify_menu', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/modify_menu.html',
                      controller: 'staffController'
                    })

                    .when('/staff/manager/modify_loyalty', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/modify_loyalty.html',
                      controller: 'staffController'
                    })

                    .when('/staff/manager/comp', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/comp.html',
                      controller: 'staffController'
                    })

                    .when('/staff/manager/financial', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/financial.html',
                      controller: 'staffController'
                    })

                    .when('/staff/manager/feedback', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/feedback.html',
                      controller: 'staffController'
                    })

              .when('/staff/kitchen', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/kitchen/kitchen.html',
                controller: 'staffController'
              })

                    .when('/staff/kitchen/feedback', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/kitchen/feedback.html',
                      controller: 'staffController'
                    })

              .when('/staff/waitstaff', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/waitstaff/waitstaff.html',
                controller: 'staffController'
              })

                    .when('/staff/waitstaff/refills', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/waitstaff/refills.html',
                      controller: 'staffController'
                    })


    // Menu routing and its subpages
      .when('/menu', {
        templateUrl: '/spaghetti/public_html/injected_pages/menu/menu.html',
        controller: 'menuController'
      })
              .when('/menu/appetizers', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuAppetizersController'
              })

              .when('/menu/drinks', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuDrinksController'
              })

              .when('/menu/entrees', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuEntreesController'
              })

              .when('/menu/desserts', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuDessertsController'
              })

              .when('/menu/kids_menu', {
                templateUrl: '/spaghetti/public_html/injected_pages/menu/menu_section.html',
                controller: 'menuKidsController'
              })

      // Games routing and its subpages
      .when('/games', {
        templateUrl: '/spaghetti/public_html/injected_pages/games/games.html',
        controller: 'gamesController'
      })

              .when('/games/connect_four', {
                templateUrl: '/spaghetti/public_html/injected_pages/games/connect_four.html',
                controller: 'gamesConnectFourController'
              })

              .when('/games/pong', {
                templateUrl: '/spaghetti/public_html/injected_pages/games/pong.html',
                controller: 'gamesConnectFourController'
              })

              .when('/games/tictactoe', {
                templateUrl: '/spaghetti/public_html/injected_pages/games/tictactoe.html',
                controller: 'gamesConnectFourController'
              })

      // Loyalty routing and its subpages
      .when('/loyalty', {
        templateUrl: '/spaghetti/public_html/injected_pages/loyalty/loyalty.html',
        controller: 'loyaltyController'
      })

            .when('/loyalty/profile', {
              templateUrl: '/spaghetti/public_html/injected_pages/loyalty/profile.html',
              controller: 'loyaltyController'
            })

            .when('/loyalty/redeem', {
              templateUrl: '/spaghetti/public_html/injected_pages/loyalty/redeem.html',
              controller: 'loyaltyController'
            })

            .when('/loyalty/orderhistory', {
              templateUrl: '/spaghetti/public_html/injected_pages/loyalty/orderhistory.html',
              controller: 'loyaltyController'
            })

      // Your Order routing and its subpages
      .when('/your_order', {
        templateUrl: '/spaghetti/public_html/injected_pages/your_order/your_order.html',
        controller: 'your_orderController'
      })

            .when('/your_order/success', {
              templateUrl: '/spaghetti/public_html/injected_pages/your_order/success.html',
              controller: 'your_orderController'
            })

      // Your Bill routing and its subpages
      .when('/your_bill', {
        templateUrl: '/spaghetti/public_html/injected_pages/your_bill/your_bill.html',
        controller: 'your_billController'
      })

            .when('/your_bill/pay', {
              templateUrl: '/spaghetti/public_html/injected_pages/your_bill/pay.html',
              controller: 'your_billController'
            })

            .when('/your_bill/split_bill', {
              templateUrl: '/spaghetti/public_html/injected_pages/your_bill/split_bill.html',
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
  $scope.pageName = "Menu";
});

// Will load array from DB eventually
app.controller('menuAppetizersController', function($scope) {
  $scope.pageName = "Appetizers";
  $scope.items = [
    {name: 'Fried Meatballs', description: 'Meaty bally bois', price: 5.00, image: '/path/to/image.jpg', info: 'Contains meatballz'},
    {name: 'Tomato Soup', description: 'delicious soup', price: 7.50, image: '/path/to/image2.jpg', info: 'Contains tomatoz'},
    {name: 'Bruschetta', description: 'vegetable kind of topping stuff', price: 6.25, image: '/path/to/image3.jpg', info: 'Contains vegetalz'},
  ]
});

app.controller('menuDrinksController', function($scope) {
  $scope.pageName = "Drinks";
  $scope.items = [
    {name: 'Water', description: 'yum yum h20', price: 0.00, image: '/path/to/image.jpg', info: 'Contains water'},
    {name: 'Soda', description: 'one carbonated lad', price: 2.50, image: '/path/to/image2.jpg', info: 'Contains carbonation'},
    {name: 'Tea', description: 'leaf water wow', price: 6.25, image: '/path/to/image3.jpg', info: 'Contains leafy lads'},
  ]
});

app.controller('menuEntreesController', function($scope) {
  $scope.pageName = "Entrees";
  $scope.items = [
    {name: 'Spaghetti', description: 'noodle and sauce woot', price: 10.00, image: '/path/to/image.jpg', info: 'Contains spaghetti'},
    {name: 'Big Spaghetti', description: 'i am in awe at the size of it', price: 12.50, image: '/path/to/image2.jpg', info: 'Contains an absolute unit'}
  ]
});

app.controller('menuDessertsController', function($scope) {
  $scope.pageName = "Desserts";
  $scope.items = [
    {name: 'Spaghetti Ice Cream', description: 'lmao wtf', price: 5.00, image: '/path/to/image.jpg', info: 'Contains spaghetti ice cream'},
    {name: 'Meatball Pie', description: 'nasty af', price: 7.50, image: '/path/to/image2.jpg', info: 'Contains meatballz'},

  ]
});

app.controller('menuKidsController', function($scope) {
  $scope.pageName = "Kid's Menu";
  $scope.items = [
    {name: 'Tendies', description: 'reeeeeeee', price: 7.00, image: '/path/to/image.jpg', info: 'Contains reeeeeeee'},
  ]
});

app.controller('gamesController', function($scope) {
  $scope.pageName = "Games Page";
});

app.controller('gamesConnectFourController', function($scope) {
  $scope.pageName = "Connect Four Page";
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
