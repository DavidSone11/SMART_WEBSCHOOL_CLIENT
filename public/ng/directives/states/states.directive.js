
var app = angular.module("dIApp");
app.directive("state", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/states/states.tmpl.html',

        controller: function ($scope, $state) {


           
          

        }

    }
}]);