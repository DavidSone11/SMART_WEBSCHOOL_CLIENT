
var app = angular.module("dIApp");
app.directive("state", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/states/states.tmpl.html',
        scope: {
            'model': '=',
            'comments': '@',
            'number': '@',
            'name': '@',
            'colour': '@',
            'details': '@',
            'type': '@',
            'goto': '@'
        },

        controller: function ($scope, $state) {





        }

    }
}]);