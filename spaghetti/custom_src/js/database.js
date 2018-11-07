var app = angular.module('dbApp', []);

app.controller('menuDatabase', function($scope, $http) {
  $http.get("../php/menu_database.php")
  .then(function(response) {
    $scope.names = response.data.records;
  });
});
