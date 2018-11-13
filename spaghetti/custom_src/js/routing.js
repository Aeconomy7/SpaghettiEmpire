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
                            controller: 'managerMenuDeleteController'
                          })

                    .when('/staff/manager/modify_loyalty', {
                      templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/modify_loyalty.html',
                      controller: 'managerLoyaltyController'
                    })

                          .when('/staff/manager/modify_loyalty/add_loyalty_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/add_loyalty_item.html',
                            controller: 'managerLoyaltyAddController'
                          })

                          .when('/staff/manager/modify_loyalty/edit_loyalty_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/edit_loyalty_item.html',
                            controller: 'managerLoyaltyEditController'
                          })

                          .when('/staff/manager/modify_loyalty/delete_loyalty_item', {
                            templateUrl: '/spaghetti/public_html/injected_pages/staff/manager/delete_loyalty_item.html',
                            controller: 'managerLoyaltyDeleteController'
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
  var refill = [];
  var tID = customerData.getTableId();
  $scope.refillsNeeded = function() {
    for(var i = 0; i < $scope.orders.length; i++) {
      if($scope.orders[i].sid == tID && $scope.orders[i].type == 'drink') {
        refill.push($scope.orders[i].item_name);
      }
    }
    return refill;
  }
});

//customer help Requests
app.controller('help_requests', function($scope, customerData) {
  $scope.addRequest = function() {
    customerData.customerHelp(customerData.getTableId());
  }
});

// Controllers for all pages
/* General Staff */
app.controller('staffController', function($scope, $window) {
  $scope.pageName = "Staff Login";

  $scope.login_id = "";
  $scope.counter = 0;

  $scope.appendVal = function(val) {
    if($scope.counter < 8) {
      $scope.login_id += val;
      $scope.counter++;
    }
    else {
      alert("No more numbers allowed");
    }
  }
  $scope.backspaceVal = function() {
    $scope.login_id = $scope.login_id.substring(0, $scope.login_id.length - 1);
    $scope.counter--;
  }

  $scope.staff_login = function() {
    console.log($scope.login_id);
    if($scope.login_id == "11114001" || $scope.login_id == "11114002" || $scope.login_id == "11114003") {
      console.log("Wait Staff login");
      $window.location.href ="/spaghetti/public_html/#/staff/waitstaff";
    }
    else if($scope.login_id == "11115001" || $scope.login_id == "11115002" || $scope.login_id == "11115003") {
      console.log("Kitchen Staff login");
      $window.location.href ="/spaghetti/public_html/#/staff/kitchen";
    }
    else if($scope.login_id == "11111337") {
      console.log("Manager login");
      $window.location.href ="/spaghetti/public_html/#/staff/manager";
    }
    else
      alert("Invalid login ID, please try again");
  }
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
      alert("Item added to menu!");
    }
  }
});

app.controller('managerMenuEditController', function($scope, menuDatabase) {
  $scope.pageName = "Edit Menu";

  // Get all the items from each category, manager chooses which to edit
  menuDatabase.pullDb("appetizer").then(function(response) {
      $scope.appetizers = response;
  });
  menuDatabase.pullDb("drink").then(function(response) {
      $scope.drinks = response;
  });
  menuDatabase.pullDb("entree").then(function(response) {
      $scope.entrees = response;
  });
  menuDatabase.pullDb("dessert").then(function(response) {
      $scope.desserts = response;
  });
  menuDatabase.pullDb("kidsmenu").then(function(response) {
      $scope.kidsmenu = response;
  });

  $scope.editMenuItem = function(item_name) {
    $scope.itemToEdit = item_name;
  }

  $scope.showItem = function(item_name) {
    if(item_name == $scope.itemToEdit)
      return true;
    return false;
  }

  $scope.submitEditMenu = function(name_add, price_add, desc_add, ingr_add, img_add) {
    if(name_add == undefined || price_add == undefined || desc_add == undefined || ingr_add == undefined || img_add == undefined)
      alert("Please enter information for all fields.");
    else if(parseFloat(price_add) < 0.0)
      alert("Price cannot be less than 0");
    // Add further input checks for now, such as apostrophes cuz gosh dang SQL errors

    // Add item if all input is fine
    else {
      var item_details = {
        original_item_name: $scope.itemToEdit,
        new_item_name: name_add,
        price: price_add,
        description: desc_add,
        ingredients: ingr_add,
        img_path: img_add
      };
      menuDatabase.editItem(item_details);
      alert("Menu item change submitted!");
    }
  }
});

app.controller('managerMenuDeleteController', function($scope, menuDatabase) {
  $scope.pageName = "Delete Menu Item";

  // Get all the items from each category, manager chooses which to delete
  menuDatabase.pullDb("appetizer").then(function(response) {
      $scope.appetizers = response;
  });
  menuDatabase.pullDb("drink").then(function(response) {
      $scope.drinks = response;
  });
  menuDatabase.pullDb("entree").then(function(response) {
      $scope.entrees = response;
  });
  menuDatabase.pullDb("dessert").then(function(response) {
      $scope.desserts = response;
  });
  menuDatabase.pullDb("kidsmenu").then(function(response) {
      $scope.kidsmenu = response;
  });

  $scope.removeFromMenu = function(item_name) {
    console.log(item_name);
    menuDatabase.removeItem(item_name);
    alert("Item successfully removed from menu.");
  }
});

app.controller('managerCompController', function($scope) {
  $scope.pageName = "Comp Order";
});

app.controller('managerLoyaltyController', function($scope) {
  $scope.pageName = "Modify Loyalty";
});

app.controller('managerLoyaltyAddController', function($scope, discountDatabase) {
  $scope.pageName = "Add New Loyalty Item";

  $scope.addToRewards = function(name_add, type_add, pt_add, disc_add, desc_add) {
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

    if(name_add == undefined || type_add == undefined || pt_add == undefined || disc_add == undefined || desc_add == undefined)
      alert("Please enter information for all fields.");
    else if(parseFloat(pt_add) < 0.0)
      alert("Point cost cannot be less than 0");
    // Add further input checks for now, such as apostrophes cuz gosh dang SQL errors

    // Add item if all input is fine
    else {
      var item_details = {
        name: name_add,
        description: desc_add,
        pt_cost: pt_add,
        type: type_add,
        discount_amt: disc_add,
      };
      discountDatabase.addReward(item_details);
      alert("Item added to loyalty rewards!");
    }
  }

});

app.controller('managerLoyaltyEditController', function($scope, discountDatabase) {
  $scope.pageName = "Edit Loyalty Item";

  // Get all the items from each category, manager chooses which to delete
  discountDatabase.getRewards("appetizer").then(function(response) {
      $scope.appetizers_rewards = response;
  });
  discountDatabase.getRewards("drink").then(function(response) {
      $scope.drinks_rewards = response;
  });
  discountDatabase.getRewards("entree").then(function(response) {
      $scope.entrees_rewards = response;
  });
  discountDatabase.getRewards("dessert").then(function(response) {
      $scope.desserts_rewards = response;
  });
  discountDatabase.getRewards("kidsmenu").then(function(response) {
      $scope.kidsmenu_rewards = response;
  });

  $scope.editRewardItem = function(name) {
    $scope.itemToEdit = name;
  }

  $scope.showItem = function(name) {
    if(name == $scope.itemToEdit)
      return true;
    return false;
  }

  $scope.submitEditReward = function(name_add, pt_add, disc_add, desc_add) {
    if(name_add == undefined || pt_add == undefined || disc_add == undefined || desc_add == undefined)
      alert("Please enter information for all fields.");
    else if(parseFloat(pt_add) < 0.0)
      alert("Point cost cannot be less than 0");
    // Add further input checks for now, such as apostrophes cuz gosh dang SQL errors

    // Add item if all input is fine
    else {
      var item_details = {
        original_name: $scope.itemToEdit,
        new_name: name_add,
        description: desc_add,
        pt_cost: pt_add,
        discount_amt: disc_add,
      };
      discountDatabase.editReward(item_details);
      alert("Item changed in loyalty rewards!");
    }
  }
});

app.controller('managerLoyaltyDeleteController', function($scope, discountDatabase) {
  $scope.pageName = "Delete Loyalty Item";

  // Get all the items from each category, manager chooses which to delete
  discountDatabase.getRewards("appetizer").then(function(response) {
      $scope.appetizers_rewards = response;
  });
  discountDatabase.getRewards("drink").then(function(response) {
      $scope.drinks_rewards = response;
  });
  discountDatabase.getRewards("entree").then(function(response) {
      $scope.entrees_rewards = response;
  });
  discountDatabase.getRewards("dessert").then(function(response) {
      $scope.desserts_rewards = response;
  });
  discountDatabase.getRewards("kidsmenu").then(function(response) {
      $scope.kidsmenu_rewards = response;
  });

  $scope.removeFromRewards = function(name) {
    console.log(name);
    discountDatabase.removeReward(name);
    alert("Item successfully removed from loyalty rewards!");
  }

});

app.controller('managerFeedController', function($scope, feedbackDatabase) {
  $scope.pageName = "Customer Feedback";
  $scope.feedback = [];

  feedbackDatabase.get_feedback().then(function(response) {
    $scope.feedback = response;
  });

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
    $scope.allowedFeedback = [];
    for(var i = 0; i < $scope.feedback.length; i++) {
      if($scope.feedback[i].manageronly == '0') {
        $scope.allowedFeedback.push($scope.feedback[i]);
      }
    }
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
app.controller('waitStaffController', function($scope, orderDatabase, customerData) {
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

  // Returns all help requests matching the table number of ng-repeat inside waitstaff.html
  $scope.getHelpByTable = function(tableNum) {
    var help = customerData.getHelpRequests();
    for(var i = 0; i < help.length; i++) {
      if(help[i].ID == tableNum && help[i].needsHelp == true) {
        return true;
      }
    }
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
    customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type);
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
    customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type);
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
    customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type);
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
    customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type);
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
    customerData.addToCart(customerData.getPhoneNo(), customerData.getTableId(), name, floatPrice, type);
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
app.controller('loyaltyController', function($scope, $window, customerData, loyaltyDatabase) {
  $scope.pageName = "Loyalty Login";

  if(customerData.getPhoneNo() != '0000000000') {
    window.location.href = "/spaghetti/public_html/#/loyalty/profile";
  }

  $scope.phone_id = "";
  $scope.counter = 0;

  $scope.appendVal = function(val) {
    if($scope.counter < 10) {
      $scope.phone_id += val;
      $scope.counter++;
    }
    else {
      alert("No more numbers allowed");
    }
  }
  $scope.backspaceVal = function() {
    $scope.phone_id = $scope.phone_id.substring(0, $scope.phone_id.length - 1);
    $scope.counter--;
  }

  $scope.loyalty_login = function() {
    if($scope.counter != 10) {
      alert("Invalid input; please enter a full phone number (10 digits)")
    }
    else {
      loyaltyDatabase.get_profile($scope.phone_id).then(function(response) {
          if(response.records.length == 1) {
            customerData.setPhoneNo($scope.phone_id);
            window.location.href = "/spaghetti/public_html/#/loyalty/profile";
          }
          else {
            alert("No account exists for phone number " + $scope.phone_id);
            $scope.phone_id = "";
          }
      });
    }
  }

  $scope.loyalty_signup = function() {
    console.log($scope.phone_id);
    if($scope.counter != 10) {
      alert("Please enter a valid phone number (10 digits), and then press the Sign Up button.");
    }
    else {
      loyaltyDatabase.signup_profile($scope.phone_id);
      alert("Sign-Up successful! You can now login using that phone number.");
    }
  }

});

app.controller('loyaltyProfileController', function($scope, customerData, loyaltyDatabase) {
  $scope.pageName = "Loyalty Profile";
  // Load the profile with the phone number used to log in
  loyaltyDatabase.get_profile(customerData.getPhoneNo()).then(function(response) {
      $scope.pts = response.records[0].pts;
      customerData.setPts($scope.pts);
      $scope.phone = response.records[0].phone_no;
      customerData.setPhoneNo($scope.phone);
  });

});

app.controller('loyaltyRedeemController', function($scope, customerData, discountDatabase, loyaltyDatabase) {
  $scope.pageName = "Redeem Loyalty Points";

  discountDatabase.getRewards("appetizer").then(function(response) {
      $scope.appetizers_rewards = response;
  });
  discountDatabase.getRewards("drink").then(function(response) {
      $scope.drinks_rewards = response;
  });
  discountDatabase.getRewards("entree").then(function(response) {
      $scope.entrees_rewards = response;
  });
  discountDatabase.getRewards("dessert").then(function(response) {
      $scope.desserts_rewards = response;
  });
  discountDatabase.getRewards("kidsmenu").then(function(response) {
      $scope.kidsmenu_rewards = response;
  });

  /* this is a function that expects the type of the discount and disc_amt
     this assumes that discounts are ONLY type based, which is fine for now */
  $scope.loyalty_redeem = function(pts_req, type_f, disc_amt) {
    if(customerData.getPts() < pts_req){
      alert('Not enough loyalty points...Buy some more spaghetti!!!');
      return;
    }
    var item_to_discount = customerData.getHighestItemofType(type_f);
    console.log('item_to_discount:' + item_to_discount);
    item_to_discount.price = disc_amt;
  }
});

app.controller('loyaltyHistoryController', function($scope, customerData, orderDatabase) {
  $scope.pageName = "Order History";
  orderDatabase.get_order_history_loyalty(customerData.getPhoneNo()).then(function(response){
    $scope.order_history = response;
  });
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
app.controller('your_billController', function($scope, customerData, orderDatabase) {
  $scope.pageName = "Your Bill";
  $scope.bill_info = [];
  $scope.bill = 0.0;
  orderDatabase.get_active_orders().then(function(response) {
    $scope.tmp = response;
    for(var i = 0; i < $scope.tmp.length; i++) {
      if($scope.tmp[i].sid == customerData.getTableId() && $scope.tmp[i].phone_no == customerData.getPhoneNo()) {
        $scope.bill_info.push($scope.tmp[i]);
        $scope.bill += parseFloat($scope.tmp[i].price);
      }
    }
  });

  // Only print section headers if they have items from that section (appetizers/drinks/etc)
  $scope.hasSectionBill = function(section) {
    for(var i = 0; i < $scope.bill_info.length; i++) {
      if($scope.bill_info[i].type == section)
        return true;
    }
    return false;
  }
});


app.controller('your_billPayController', function($scope, customerData, orderDatabase, feedbackDatabase, loyaltyDatabase) {
  $scope.pageName = "Pay";
  $scope.bill_info = [];
  $scope.bill = 0.0;
  $scope.pts_earned = 0;
  $scope.managerOnly = '1';
  orderDatabase.get_active_orders().then(function(response) {
    $scope.tmp = response;
    for(var i = 0; i < $scope.tmp.length; i++) {
      if($scope.tmp[i].sid == customerData.getTableId() && $scope.tmp[i].phone_no == customerData.getPhoneNo()) {
        $scope.bill_info.push($scope.tmp[i]);
        $scope.bill += parseFloat($scope.tmp[i].price);
      }
    }
    $scope.tip_15 = $scope.bill * 0.15;
    $scope.tip_20 = $scope.bill * 0.20;
    $scope.tip_25 = $scope.bill * 0.25;
    $scope.pts_earned = parseInt(10 * $scope.bill);
  });

  $scope.feedbackKitchen = function() {
    if($scope.managerOnly == '1')
      $scope.managerOnly = '0';
    else if($scope.managerOnly == '0')
      $scope.managerOnly = '1';
    console.log($scope.managerOnly);
  }

  $scope.sendOffToEverything = function(comment) {
    // FEEDBACK: insert feedback
    if(typeof comment != "undefined")
      feedbackDatabase.insert_feedback(comment, customerData.getTableId(), $scope.managerOnly);

    // mark items off as inactive
    orderDatabase.update_active_orders(customerData.getTableId());
    // send to order history
    var phone = customerData.getPhoneNo();
    var amt = $scope.bill;
    console.log("Inserting into order history");
    console.log(phone, amt);
    orderDatabase.insert_into_history(phone, amt);


    // LOYALTY: assign points
    var phone = customerData.getPhoneNo();
      if(phone != "0000000000") {
        var current_pts = customerData.getPts();
        var new_pts = parseInt(current_pts) + parseInt($scope.pts_earned);
        console.log("Assigning new info for loyalty:");
        console.log(phone, new_pts);
        loyaltyDatabase.update_points(phone, new_pts);
    }

    alert("Payment received! Thanks for eating at Spaghetti Empire!");
    window.location.href = "/spaghetti/public_html/";

  }

});

app.controller('your_billSplitController', function($scope, customerData, orderDatabase) {
  $scope.pageName = "Split Bill";
  $scope.bill_info = [];
  $scope.bill = 0.0;
  orderDatabase.get_active_orders().then(function(response) {
    $scope.tmp = response;
    for(var i = 0; i < $scope.tmp.length; i++) {
      if($scope.tmp[i].sid == customerData.getTableId() && $scope.tmp[i].phone_no == customerData.getPhoneNo()) {
        $scope.bill_info.push($scope.tmp[i]);
        $scope.bill += parseFloat($scope.tmp[i].price);
      }
    }
  });

  $scope.hasSectionBill = function(section) {
    for(var i = 0; i < $scope.bill_info.length; i++) {
      if($scope.bill_info[i].type == section)
        return true;
    }
    return false;
  }


  $scope.RemoveItemFromBill = function(name) {
    console.log(name);
    var index = $scope.bill_info.indexOf(name);
    // $scope.bill_info.RemoveFromBill(""); TODO
    customerData.removeFromCart(index);
  }
});
