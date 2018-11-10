var app = angular.module('switchApp', ['ngRoute', 'customerModule', 'dbApp']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider
    // Staff routing and its subpages
    .when('/staff', {
      templateUrl: '/spaghetti/public_html/injected_pages/staff/staff_login.html',
      controller: 'staffController'
    })

              // Manager lad
              .when('/staff/manager', {
                templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/manager.html',
                controller: 'managerController'
              })
                    .when('/staff/manager/modify_menu', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/modify_menu.html',
                      controller: 'managerMenuController'
                    })

                          .when('/staff/manager/modify_menu/add_menu_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/add_menu_item.html',
                            controller: 'managerMenuAddController'
                          })

                          .when('/staff/manager/modify_menu/edit_menu_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/edit_menu_item.html',
                            controller: 'managerMenuEditController'
                          })

                          .when('/staff/manager/modify_menu/delete_menu_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/delete_menu_item.html',
                            controller: 'managerMenuEditController'
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

              // Kitchen lads
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
                controller: 'kitchenStaffOrdersController'
              })

              // Waitstaff lads
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

              .when('/games/snake', {
                templateUrl: '/spaghetti/public_html/injected_pages/games/snake.html',
                controller: 'gamesSnakeController'
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

// Table ID form
app.controller('tableForm', function($scope, customerData) {
  $scope.t_id = '';
  $scope.updateId = function(id) {
    customerData.setTableId(id);
    console.log(customerData.getTableId());
  }
});

// Customer refills view
app.controller('your_refills', function($scope, customerData) {
  $scope.refills = customerData.getRefills();
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

// Menu controllers for manager
app.controller('managerMenuController', function($scope) {
  $scope.pageName = "Modify Menu";
});

app.controller('managerMenuAddController', function($scope, menuDatabase) {
  $scope.pageName = "Add New Item";

  $scope.addToMenu = function(name_add, type_add, price_add, desc_add, ingr_add, img_add) {
    // Input checking
    if(type_add == '1') {
      type_add = 'appetizer';
    } else if (type_add == '2') {
      type_add = 'drink'
    } else if (type_add == '3') {
      type_add = 'entree';
    } else if (type_add == '4') {
      type_add = 'dessert';
    } else if (type_add == '5') {
      type_add = 'kidsmenu';
    }

    if(name_add == undefined || type_add == undefined || price_add == undefined || desc_add == undefined || ingr_add == undefined || img_add == undefined)
      alert("Please enter information for all fields.");
    else if(parseFloat(price_add) < 0.0)
      alert("Price cannot be less than 0");
    // Add further input checks for now, such as apostrophes cuz gosh dang SQL errors


    // Add item if all input is fine
    else {
      var item_details = {
        type: type_add,
        item_name: name_add,
        price: price_add,
        description: desc_add,
        ingredients: ingr_add,
        img_path: img_add
      };
      menuDatabase.addItem(item_details);
      console.log("call finished from manager");
    }
  }
});

app.controller('managerMenuEditController', function($scope) {
  $scope.pageName = "Edit Menu";
});

app.controller('managerMenuDeleteController', function($scope) {
  $scope.pageName = "Delete Menu Item";
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

app.controller('kitchenStaffFeedController', function($scope, feedbackDatabase) {
  $scope.pageName = "Customer Feedback";
  $scope.feedback = [];

  feedbackDatabase.get_feedback().then(function(response) {
    $scope.feedback = response;
  });

});

app.controller('kitchenStaffOrdersController', function($scope, orderDatabase) {
  $scope.pageName = "Open Orders";
  $scope.tables = 24;
  $scope.orders = [];

  // Specifies size of table for ng-repeat, only accepts arrays
  $scope.getTableAmount = function () {
    return new Array($scope.tables);
  }

  orderDatabase.get_active_orders().then(function(response) {
    $scope.orders = response;
  });

  // Returns all non-drinks matching the table number of ng-repeat inside open_orders.html
  $scope.getOrderByTable = function(tableNum) {
    var order = [];
    for(var i = 0; i < $scope.orders.length; i++) {
      if($scope.orders[i].sid == tableNum && $scope.orders[i].type != 'drink') {
        order.push($scope.orders[i].item_name);
      }
    }
    return order;
  }

});

/* Waitstaff */
app.controller('waitStaffController', function($scope, orderDatabase) {
  $scope.pageName = "Wait Staff";
  $scope.tables = 24;
  $scope.orders = [];

  // Specifies size of table for ng-repeat, only accepts arrays
  $scope.getTableAmount = function () {
    return new Array($scope.tables);
  }

  orderDatabase.get_active_orders().then(function(response) {
    $scope.orders = response;
  });

  // Returns all drinks matching the table number of ng-repeat inside waitstaff.html
  $scope.getDrinksByTable = function(tableNum) {
    var drinks = [];
    for(var i = 0; i < $scope.orders.length; i++) {
      if($scope.orders[i].sid == tableNum && $scope.orders[i].type == 'drink') {
        drinks.push($scope.orders[i].item_name);
      }
    }
    return drinks;
  }

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
  $scope.type = "appetizer";
  // Pull from DB, wait for it to finish
  menuDatabase.pullDb("appetizer").then(function(response) {
      $scope.items = response;
  });

  $scope.add = function(name, price, type) {
    var floatPrice = parseFloat(price);
    customerData.addToCart('0000000000', customerData.getTableId(), name, floatPrice, type);
  }
});

app.controller('menuDrinksController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Drinks";
  $scope.type = "drink";
  menuDatabase.pullDb("drink").then(function(response) {
      $scope.items = response;
  });

  $scope.add = function(name, price, type) {
    var floatPrice = parseFloat(price);
    customerData.addToCart('0000000000', customerData.getTableId(), name, floatPrice, type);
  }
});

app.controller('menuEntreesController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Entrees";
  $scope.type = "entree";
  menuDatabase.pullDb("entree").then(function(response) {
      $scope.items = response;
  });
  $scope.add = function(name, price, type) {
    var floatPrice = parseFloat(price);
    customerData.addToCart('0000000000', customerData.getTableId(), name, floatPrice, type);
  }
});

app.controller('menuDessertsController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Desserts";
  $scope.type = "dessert";
  menuDatabase.pullDb("dessert").then(function(response) {
      $scope.items = response;
  });

  $scope.add = function(name, price, type) {
    var floatPrice = parseFloat(price);
    customerData.addToCart('0000000000', customerData.getTableId(), name, floatPrice, type);
  }
});

app.controller('menuKidsController', function($scope, customerData, menuDatabase) {
  $scope.pageName = "Kid's Menu";
  $scope.type = "kidsmenu";
  menuDatabase.pullDb("kidsmenu").then(function(response) {
      $scope.items = response;
  });

  $scope.add = function(name, price, type) {
    var floatPrice = parseFloat(price);
    customerData.addToCart('0000000000', customerData.getTableId(), name, floatPrice, type);
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

app.controller('gamesSnakeController', function($scope) {
  $scope.pageName = "Snake";
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
  console.log("order cost: ");
  console.log($scope.cost);

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


app.controller('your_billPayController', function($scope, customerData) {
  $scope.pageName = "Pay";
  $scope.bill_info = customerData.getOrderOverall();
  $scope.bill = customerData.getBill();

});

app.controller('your_billSplitController', function($scope, customerData) {
  $scope.pageName = "Split Bill";
  $scope.bill_info = customerData.getOrderOverall();
  $scope.bill = customerData.getBill();

  $scope.hasSectionBill = function(section) {
    for(var i = 0; i < $scope.bill_info.length; i++) {
      if($scope.bill_info[i].type == section)
        return true;
    }
    return false;
  }

  $scope.RemoveItemFromBill = function(name, price, type) {
    $scope.bill_info.RemoveFromBill("");
    $scope.bill_info.removeFromCart("");
  }


});
