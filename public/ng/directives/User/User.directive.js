
var app = angular.module("dIApp").directive("user", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/User/User.tmpl.html',
        link: function (scope, elem, attr) {

        },
        controller: function ($scope) {

        }

    }
}]);