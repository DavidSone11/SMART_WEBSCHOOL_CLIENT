var app = angular.module('dIApp');
app.directive('loading', ['$http', '$timeout', function ($http, $timeout) {
    return {
        restrict: 'E',
        template: '<div class="loading-spinner"><img src="../images/ajax-loading.gif" width=40 height=40  /> {{label}} </div>',
        scope: {
            label: '@',
            isLoad: '='
        },
        link: function (scope, element, attrs) {
           // scope.isLoad = false;

           scope.$watch(function() {
            return $http.pendingRequests.length > 0;
        }, function(hasPending) {
            if (hasPending) {
                // show wait dialog
            }
            else  {
                 // hide wait dialog
            }
        });

        }
    };
}])