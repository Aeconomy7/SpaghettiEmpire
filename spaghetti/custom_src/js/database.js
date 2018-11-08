var app = angular.module('dbApp', []);

app.service('menuDatabase', ['$http', function($http) {
    return {
      pullDb: pullDb
    };
    function pullDb(typeFind) {
      console.log("looking for: " + typeFind);
      $http.get("/spaghetti/custom_src/php/menu_database.php")
        .then(function (response) {
          var records = JSON.parse(response.data);
          console.log(records);
          for(var i = 0; i < records.length; i++) {
            console.log("item:" + records[i]);
            if(records[i].type == typeFind) {
              items.push(records[i]);
            }
          }
          return items;
        });
      }
}]);
