
"use strict";
var app = angular.module("dIApp");
app.directive("mainHeader", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/header/header.tmpl.html',

        controller: function ($scope, $state, authFactory,$window) {


            $scope.logout = function () {


                authFactory.dologout().then(function success(response) {

                    console.log(response);

                    delete $window.sessionStorage.token;
                    delete $window.sessionStorage.username;
                    delete $window.sessionStorage.role;
    
                    delete $window.localStorage.token;
                    delete $window.localStorage.username;
                    delete $window.localStorage.role;
                    delete authFactory.username;
                    delete authFactory.role;
                    delete authFactory.token;

                    $state.go("login");

                }, function error(response) {

                });




            }



        }

    }
}]);