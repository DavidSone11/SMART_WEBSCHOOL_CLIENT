
var app = angular.module("dIApp");
app.directive("headerNotification", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/header/header-notification/header-notification.tmpl.html',
     
        controller: function ($scope) {

            

        }

    }
}]);