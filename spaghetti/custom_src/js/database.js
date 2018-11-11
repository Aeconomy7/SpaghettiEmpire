var app = angular.module('dbApp', []);

app.service('menuDatabase', ['$http', function($http) {
    var result;
    var items = [];

    var pullDb = function(typeFind) {
      var $promise = $http.get("/spaghetti/custom_src/php/menu_item_select.php")
        .then(function (response) {
          result = response.data;
          items = [];
          for(var i = 0; i < result.records.length; i++) {
            if(result.records[i].type == typeFind) {
              items.push(result.records[i]);
            }
          }
          return items;
        });
        return $promise;
    }

    var addItem = function(item_details) {
      var request;
      console.log(item_details);
      request = $http.post("/spaghetti/custom_src/php/menu_item_insert.php",
        {
          'type': item_details.type,
          'item_name': item_details.item_name,
          'price': item_details.price,
          'description': item_details.description,
          'ingredients': item_details.ingredients,
          'img_path': item_details.img_path
        })
        .then(function(response) {
            console.log(response);
            console.log(response.data);
        });
    }

    var editItem = function(item_details) {
      var request;
      console.log(item_details);
      request = $http.post("/spaghetti/custom_src/php/menu_item_edit.php",
        {
          'original_item_name': item_details.original_item_name,
          'new_item_name': item_details.new_item_name,
          'price': item_details.price,
          'description': item_details.description,
          'ingredients': item_details.ingredients,
          'img_path': item_details.img_path
        })
        .then(function(response) {
            console.log(response);
            console.log(response.data);
        });
    }

    var removeItem = function(item_name) {
      var request;
      request = $http.post("/spaghetti/custom_src/php/menu_item_delete.php",
        {
          'item_name': item_name
        })
        .then(function(response) {
            console.log(response);
            console.log(response.data);
        });
    }

    return {
      pullDb: pullDb,
      addItem: addItem,
      editItem: editItem,
      removeItem: removeItem
    };
}]);

app.service('orderDatabase', ['$http', function($http) {

  var result;
  var items = [];

  // Adds an order to the database
  var push_order = function(cart) {
    // (phone_no, sid, item_name, price, active)
    console.log("orderdb");
    console.log(cart);

    var request;

    for(var i = 0; i < cart.length; i++) {
      request = $http.post("/spaghetti/custom_src/php/ordered_items_insert.php",
        {
          'phone_no': cart[i].phone_no,
          'sid': cart[i].sid,
          'item_name': cart[i].item_name,
          'price': cart[i].price,
          'type': cart[i].type,
          'active': cart[i].active
        })
        .then(function(response) {
            console.log(response.data);
        });
    }
  }

  // Returns gigantic list of all active ordered items
  var get_active_orders = function() {
    var $promise = $http.get("/spaghetti/custom_src/php/ordered_items_select.php")
      .then(function (response) {
        result = response.data;
        items = [];
        for(var i = 0; i < result.records.length; i++) {
          if(result.records[i].active == "1") {
            items.push(result.records[i]);
          }
        }
        return items;
      });
      return $promise;
  }


  return {
    push_order: push_order,
    get_active_orders: get_active_orders
  };

}]);


app.service('feedbackDatabase', ['$http', function($http) {

  var result;
  var items = [];

  // Returns gigantic list of all feedback
  var get_feedback = function() {
    var $promise = $http.get("/spaghetti/custom_src/php/feedback_select.php")
      .then(function (response) {
        result = response.data;
        items = [];
        for(var i = 0; i < result.records.length; i++) {
          items.push(result.records[i]);
        }
        return items;
      });
      return $promise;
  }


  return {
    get_feedback: get_feedback
  };

}]);

app.service('loyaltyDatabase', ['$http', function($http) {

  var result;
  var items = [];

  // Returns loyalty profile data and checks login
  var get_profile = function(phone) {
    var $promise = $http.post("/spaghetti/custom_src/php/loyalty_select.php",
    {
      'phone_no': phone
    })
    .then(function (response) {
      result = response.data;
      console.log(result);
      return result;
    });
    return $promise;
  }

  var signup_profile = function(phone) {
    var request;
    request = $http.post("/spaghetti/custom_src/php/loyalty_insert.php",
      {
        'phone_no': phone,
        'pts': '0'
      })
      .then(function(response) {
          console.log(response.data);
      });
  }

  return {
    get_profile: get_profile,
    signup_profile: signup_profile
  };

}]);

app.service('discountDatabase', ['$http', function($http) {
    var result;
    var items = [];

    var getRewards = function(typeName) {
      var $promise = $http.get("/spaghetti/custom_src/php/discount_select.php")
      .then(function (response) {
        result = response.data;
        items = [];
        for(var i = 0; i < result.records.length; i++) {
          if(result.records[i].type == typeName) {
            items.push(result.records[i]);
          }
        }
        return items;
      });
      return $promise;
    }

    var addReward = function(item_details) {
      var request;
      console.log(item_details);
      request = $http.post("/spaghetti/custom_src/php/discount_insert.php",
        {
          'name': item_details.name,
          'description': item_details.description,
          'pt_cost': item_details.pt_cost,
          'type': item_details.type,
          'discount_amt': item_details.discount_amt
        })
        .then(function(response) {
            console.log(response.data);
        });
    }

    var editReward = function(item_details) {
      var request;
      console.log(item_details);
      request = $http.post("/spaghetti/custom_src/php/discount_edit.php",
        {
          'original_name': item_details.original_name,
          'new_name': item_details.new_name,
          'description': item_details.description,
          'pt_cost': item_details.pt_cost,
          'discount_amt': item_details.discount_amt
        })
        .then(function(response) {
            console.log(response);
            console.log(response.data);
        });
    }

    var removeReward = function(name) {
      var request;
      request = $http.post("/spaghetti/custom_src/php/discount_delete.php",
        {
          'name': name
        })
        .then(function(response) {
            console.log(response);
            console.log(response.data);
        });
    }

    return {
      getRewards: getRewards,
      addReward: addReward,
      editReward: editReward,
      removeReward: removeReward
    };
}]);
