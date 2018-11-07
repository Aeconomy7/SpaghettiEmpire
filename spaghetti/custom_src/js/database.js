var app = angular.module('dbApp', []);

app.controller('menuDatabase', function($scope, $http) {
$http.get("../php/menu_database.php")
  .success(function(response) {
    //$scope.names = response.data.records;
    console.log("in function");
  });
});
