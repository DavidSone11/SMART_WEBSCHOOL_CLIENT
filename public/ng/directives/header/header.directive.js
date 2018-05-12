
var app = angular.module("dIApp");
app.directive("mainHeader", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/header/header.tmpl.html',

        controller: function ($scope, $state, authFactory) {


            $scope.logout = function () {


                authFactory.dologout().then(function success(response) {

                    console.log(response);
                    $state.go("login");

                }, function error(response) {

                });




            }



        }

    }
}]);