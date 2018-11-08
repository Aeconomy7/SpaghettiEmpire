var app = angular.module('dbApp', []);

app.service('menuDatabase', ['$http', function($http) {
    return {
      pullDb: pullDb
    };
    function pullDb(typeFind) {
      console.log("looking for: " + typeFind);
      $http.get("/spaghetti/custom_src/php/menu_database.php")
        .then(function (response) {
          var result = response.data;
          console.log(result.records);
          var items = [];
          for(var i = 0; i < result.records.length; i++) {
            console.log(result.records[i]);
            if(result.records[i].type == typeFind) {
              items.push(result.records[i]);
            }
          }
          console.log("returning: ");
          console.log(items);
          return items;
        });
      }
}]);
