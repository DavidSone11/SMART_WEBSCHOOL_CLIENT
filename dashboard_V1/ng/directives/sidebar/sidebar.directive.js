
var app = angular.module("dIApp");
app.directive("sideBar", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/sidebar/sidebar.tmpl.html',
     
        controller: function ($scope) {



        }

    }
}]);