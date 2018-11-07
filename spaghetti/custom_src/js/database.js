var app = angular.module('dbApp', []);

app.controller('menuDatabase', function($scope, $http) {
  $http.get("custom_src/php/menu_database.php")
  .then(function(response) {
    $scope.names = response.data.records;
  });
});
