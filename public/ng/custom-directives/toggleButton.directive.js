var app = angular.module('dIApp');
app.directive('toggleButton', ['$http', '$timeout', function ($http, $timeout) {
    return {
        restrict: 'E',
        template: '<div class="well" ng-init="init()">< i class= "fa fa-toggle-on active" ng-if= "status == true" ng-click="changeStatus();"> </i><i class="fa fa-toggle-on fa-rotate-180 inactive" ng-if="status == false" ng-click="changeStatus();"> </i> </div> <pre>{{ status }}</pre>',
        scope: {
            label: '@',
            isLoad: '='
        },
        link: function (scope, element, attrs) {


        },
        controller: function ($scope, $state) {

            $scope.init = function () {
                $scope.status = true;
            }

            $scope.changeStatus = function () {
                $scope.status = !$scope.status;
            }


        }
    };
}])