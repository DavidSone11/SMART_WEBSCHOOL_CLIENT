
var app = angular.module("dIApp").controller("LoginController", function ($scope, $state) {
    
    $scope.isRegister = false;
    $scope.isForget =false;

    $scope.login = function (username, password) {
        console.log(username);
        console.log(password);

        $state.go("home.dashboard");
    }

   
    $scope.register = function () {
        

    }

});