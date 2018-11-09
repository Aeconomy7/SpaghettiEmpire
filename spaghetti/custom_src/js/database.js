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
  var add_order;
  var get_order;

  var push_order = function(cart) {
    // (phone_no, sid, item_name, price, active)
    console.log("orderdb");
    console.log(cart);

    var request;
    
    for(var i = 0; i < cart.length; i++) {
      request = $http.post("/spaghetti/custom_src/php/ordered_items_select.php",
        {
          phone_no: cart[i].phone_no,
          sid: cart[i].sid,
          item_name: cart[i].item_name,
          price: cart[i].price,
          active: cart[i].active
        })
        .then(function(response) {
            console.log(response.data);
        });
      console.log(request.data);
    }
  }

  return {
    push_order: push_order
  };

}]);
