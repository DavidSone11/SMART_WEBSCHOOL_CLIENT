
var app = angular.module("dIApp");
app.directive("mainHeader", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/header/header.tmpl.html',

        controller: function ($scope, $state) {


            $scope.logout = function () {
                $state.go("login");

            }

           

        }

    }
}]);