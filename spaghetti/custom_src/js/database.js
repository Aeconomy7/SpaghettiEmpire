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
          console.log(result);
          console.log(result.message);
          console.log(result.records);
          console.log(result.data[0]);

      /*    for(var i = 0; i < records.length; i++) {
            console.log("item:" + records[i]);
            if(records[i].type == typeFind) {
              items.push(records[i]);
            }
          }
          return items; */
        });
      }
}]);
