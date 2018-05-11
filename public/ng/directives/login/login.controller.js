
var app = angular.module("dIApp").controller("LoginController", function ($scope,$state) {

    $scope.login = function (username, password) {
        console.log(username);
        console.log(password);

        $state.go("home.dashboard");
    }

});