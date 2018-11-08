var app = angular.module('dbApp', []);

app.service('menuDatabase', ['$http', function($http) {
    return {
      pullDb: pullDb
    };
    function pullDb(typeFind) {
      console.log("before function");
      $http.get("/spaghetti/custom_src/php/menu_database.php")
        .then(function (response) {
          var records = response.data;
          var items;
          for(var i = 0; i < records.length; i++) {
            if(records[i].type == typeFind)
              items.push(records[i]);
          }
          return items;
        });
      }
}]);
