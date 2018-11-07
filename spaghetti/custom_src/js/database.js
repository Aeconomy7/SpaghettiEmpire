var app = angular.module('dbApp', []);

app.controller('menuDatabase', function($scope, $http) {
  console.log("before function");
  $http.get("../php/menu_database.php").success(function(response) {
    //$scope.names = response.data.records;
    console.log("in function");
  });
});
