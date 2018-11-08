var app = angular.module('switchApp', ['ngRoute', 'customerModule', 'dbApp']);
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
                controller: 'managerController'
              })
                    .when('/staff/manager/modify_menu', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/modify_menu.html',
                      controller: 'managerMenuController'
                    })

                    .when('/staff/manager/modify_loyalty', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/modify_loyalty.html',
                      controller: 'managerLoyaltyController'
                    })

                    .when('/staff/manager/comp', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/comp.html',
                      controller: 'managerCompController'
                    })

                    .when('/staff/manager/financial', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/financial.html',
                      controller: 'managerFinancialController'
                    })

                    .when('/staff/manager/feedback', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/feedback.html',
                      controller: 'managerFeedController'
                    })

              .when('/staff/kitchen', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/kitchen/kitchen.html',
                controller: 'kitchenStaffController'
              })

              .when('/staff/kitchen/feedback', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/kitchen/feedback.html',
                controller: 'kitchenStaffFeedController'
              })

              .when('/staff/kitchen/open_orders', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/kitchen/open_orders.html',
                controller: 'kitchenStaffFeedController'
              })

              .when('/staff/waitstaff', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/waitstaff/waitstaff.html',
                controller: 'waitStaffController'
              })

                    .when('/staff/waitstaff/refills', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/waitstaff/refills.html',
                      controller: 'waitStaffRefillController'
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
                controller: 'gamesPongController'
              })

              .when('/games/tictactoe', {
                templateUrl: '/spaghetti/public_html/injected_pages/games/tictactoe.html',
                controller: 'gamesTTTController'
              })

      // Loyalty routing and its subpages
      .when('/loyalty', {
        templateUrl: '/spaghetti/public_html/injected_pages/loyalty/loyalty.html',
        controller: 'loyaltyController'
      })

            .when('/loyalty/profile', {
              templateUrl: '/spaghetti/public_html/injected_pages/loyalty/profile.html',
              controller: 'loyaltyProfileController'
            })

            .when('/loyalty/redeem', {
              templateUrl: '/spaghetti/public_html/injected_pages/loyalty/redeem.html',
              controller: 'loyaltyRedeemController'
            })

            .when('/loyalty/orderhistory', {
              templateUrl: '/spaghetti/public_html/injected_pages/loyalty/orderhistory.html',
              controller: 'loyaltyHistoryController'
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

            .when('/your_bill/pay', {
              templateUrl: '/spaghetti/public_html/injected_pages/your_bill/pay.html',
              controller: 'your_billPayController'
            })

            .when('/your_bill/split_bill', {
              templateUrl: '/spaghetti/public_html/injected_pages/your_bill/split_bill.html',
              controller: 'your_billSplitController'
            })

      // Template routing
      .when('/template', {
        templateUrl: '/spaghetti/public_html/injected_pages/template.html',
        controller: 'templateController'
      })

});

// Back button directive
app.directive('back', function() {
    return {
        restrict: 'A',
        link: function( scope, element, attrs ) {
            element.on( 'click', function () {
                history.back();
                scope.$apply();
            } );
        }
    };
});


// Controllers for all pages

/* General Staff */
app.controller('staffController', function($scope) {
  $scope.pageName = "Staff Login";
});

/* Manager */
app.controller('managerController', function($scope) {
  $scope.pageName = "Manager";
});

app.controller('managerMenuController', function($scope) {
  $scope.pageName = "Modify Menu";
});

app.controller('managerCompController', function($scope) {
  $scope.pageName = "Comp Order";
});

app.controller('managerLoyaltyController', function($scope) {
  $scope.pageName = "Modify Loyalty";
});

app.controller('managerFeedController', function($scope) {
  $scope.pageName = "Customer Feedback";
});

app.controller('managerFinancialController', function($scope) {
  $scope.pageName = "Financial Data";
});

/* Kitchen */
app.controller('kitchenStaffController', function($scope) {
  $scope.pageName = "Kitchen Staff";
});

app.controller('kitchenStaffFeedController', function($scope) {
  $scope.pageName = "Open Orders";
});

/* Waitstaff */
app.controller('waitStaffController', function($scope) {
  $scope.pageName = "Wait Staff";
  $scope.drinks = [{
                  table: '7',
                  drink: [
                        {type:'rootbeer'},
                        {type: 'sprite'},
                        {type: 'water'}
                        ]
    },
    {table: '9', drink: [
                      {type:'sprite'}
                    ]
    }
  ]
});

app.controller('waitStaffRefillController', function($scope) {
  $scope.pageName = "Refill Requests";
});

/* Menu */
app.controller('menuController', function($scope) {
  $scope.pageName = "Menu";
});

app.controller('menuAppetizersController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Appetizers";
  $scope.items = [
    {name: 'Fried Meatballs', description: 'Meaty bally bois', price: 5.00, image: '/path/to/image.jpg', info: 'Contains meatballz'},
    {name: 'Tomato Soup', description: 'delicious soup', price: 7.50, image: '/path/to/image2.jpg', info: 'Contains tomatoz'},
    {name: 'Bruschetta', description: 'vegetable kind of topping stuff', price: 6.25, image: '/path/to/image3.jpg', info: 'Contains vegetalz'},
  ]
  $scope.type = "appetizer";
  $scope.add = function(name, price, type) {
    customerData.addToCart(name, price, type);
  }
  menuDatabase.pullDb();
});

app.controller('menuDrinksController', function($scope, customerData) {
  $scope.pageName = "Drinks";
  $scope.items = [
    {name: 'Water', description: 'yum yum h20', price: 0.00, image: '/path/to/image.jpg', info: 'Contains water'},
    {name: 'Soda', description: 'one carbonated lad', price: 2.50, image: '/path/to/image2.jpg', info: 'Contains carbonation'},
    {name: 'Tea', description: 'leaf water wow', price: 6.25, image: '/path/to/image3.jpg', info: 'Contains leafy lads'},
  ]
  $scope.type = "drink";
  $scope.add = function(name, price, type) {
    customerData.addToCart(name, price, type);
  }
});

app.controller('menuEntreesController', function($scope, customerData) {
  $scope.pageName = "Entrees";
  $scope.items = [
    {name: 'Spaghetti', description: 'noodle and sauce woot', price: 10.00, image: '/path/to/image.jpg', info: 'Contains spaghetti'},
    {name: 'Big Spaghetti', description: 'i am in awe at the size of it', price: 12.50, image: '/path/to/image2.jpg', info: 'Contains an absolute unit'}
  ]
  $scope.type = "entree";
  $scope.add = function(name, price, type) {
    customerData.addToCart(name, price, type);
  }
});

app.controller('menuDessertsController', function($scope, customerData) {
  $scope.pageName = "Desserts";
  $scope.items = [
    {name: 'Spaghetti Ice Cream', description: 'lmao wtf', price: 5.00, image: '/path/to/image.jpg', info: 'Contains spaghetti ice cream'},
    {name: 'Meatball Pie', description: 'nasty af', price: 7.50, image: '/path/to/image2.jpg', info: 'Contains meatballz'}
  ]
  $scope.type = "dessert";
  $scope.add = function(name, price, type) {
    customerData.addToCart(name, price, type);
  }
});

app.controller('menuKidsController', function($scope, customerData) {
  $scope.pageName = "Kid's Menu";
  $scope.items = [
    {name: 'Tendies', description: 'reeeeeeee', price: 7.00, image: '/path/to/image.jpg', info: 'Contains reeeeeeee'}
  ]
  $scope.type = "kids";
  $scope.add = function(name, price, type) {
    customerData.addToCart(name, price, type);
  }
});

/* Games */
app.controller('gamesController', function($scope) {
  $scope.pageName = "Games";
});

app.controller('gamesConnectFourController', function($scope) {
  $scope.pageName = "Connect Four";
});

app.controller('gamesPongController', function($scope) {
  $scope.pageName = "Pong";
});

app.controller('gamesTTTController', function($scope) {
  $scope.pageName = "Tic-Tac-Toe";
});

/* Loyalty */
app.controller('loyaltyController', function($scope) {
  $scope.pageName = "Loyalty Login";
});

app.controller('loyaltyProfileController', function($scope) {
  $scope.pageName = "Loyalty Profile";
  $scope.pointsEarned = 0;
  $scope.phoneNumber = "111-111-1111";
});

app.controller('loyaltyRedeemController', function($scope) {
  $scope.pageName = "Redeem Loyalty Points";
  $scope.items = [
    {name: 'Free Drink', description: 'One free drink to enjoy, on us. Discount will be applied to the lowest priced drink on your bill.', cost: 5},
    {name: 'Free Appetizer', description: 'One free appetizer to enjoy, on us. Discount will be applied to the lowest priced appetizer on your bill.', cost: 10}
  ]
});

app.controller('loyaltyHistoryController', function($scope) {
  $scope.pageName = "Order History";
});

/* Your Order */
app.controller('your_orderController', function($scope, $route, $window, customerData) {
  $scope.pageName = "Your Order";
  $scope.cart = customerData.getCart();
  $scope.cost = customerData.getCost();
  $scope.sectionBool = false;

  // Only print section headers if they have items from that section (appetizers/drinks/etc)
  $scope.hasSection = function(section) {
    for(var i = 0; i < $scope.cart.length; i++) {
      if($scope.cart[i].type == section)
        return true;
    }
    return false;
  }


  // Submits their order to their bill and clears their order
  $scope.orderPlaced = function() {
    customerData.addToBill();
    $route.reload();
    $window.alert("Order Successfully Placed!");
  }
});

/* Your Bill */
app.controller('your_billController', function($scope, customerData) {
  $scope.pageName = "Your Bill";
  $scope.bill_info = customerData.getOrderOverall();
  $scope.bill = customerData.getBill();

  // Only print section headers if they have items from that section (appetizers/drinks/etc)
  $scope.hasSectionBill = function(section) {
    for(var i = 0; i < $scope.bill_info.length; i++) {
      if($scope.bill_info[i].type == section)
        return true;
    }
    return false;
  }
});

app.controller('your_billPayController', function($scope) {
  $scope.pageName = "Pay";
});

app.controller('your_billSplitController', function($scope) {
  $scope.pageName = "Split Bill";
});

////////////
app.controller('templateController', function($scope) {
  $scope.pageName = "Template Page";
});
