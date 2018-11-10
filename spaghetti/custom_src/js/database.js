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

    return {
      pullDb: pullDb
    };
}]);

app.service('orderDatabase', ['$http', function($http) {

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
        var result = response.data;
        var items = [];
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
