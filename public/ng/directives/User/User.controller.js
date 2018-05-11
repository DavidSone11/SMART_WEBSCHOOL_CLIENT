
var app = angular.module("dIApp");
app.controller("UserController",  ['$scope','$timeout','$http',function($scope,$timeout,$http) {
    $scope.users = [];
    $scope.isloading = true;

    $timeout(function () {
        $http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
            $scope.users = response.data;
            $scope.isloading = false;
        });
    }, 2000)

}]);