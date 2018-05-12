
var app = angular.module("dIApp");

app.directive("home", ['$compile', function ($compile) {

    return {

        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/home/home.tmpl.html',
        link: function (scope, elem, attr) {

        },
        controller: function ($scope) {

        }

    }

}]);