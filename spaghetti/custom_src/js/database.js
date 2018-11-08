var app = angular.module('dbApp', []);

app.service('menuDatabase', ['$http', function($http) {
    return {
      pullDb: pullDb
    };
    function pullDb() {
      console.log("before function");
      $http.get("/spaghetti/custom_src/php/menu_database.php")
        .then(function (response) {
            console.log(response.data);
        });
      }
}]);
