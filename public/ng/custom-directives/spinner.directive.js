var app = angular.module('dIApp');

app.controller('mainController', function ($scope, $http, $timeout) {

    $scope.users = [];
    $scope.loading = true;

    $timeout(function () {
        $http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
            $scope.users = response.data;
        }).finally(function () {
            $scope.loading = false;
        });
    }, 3000);


});

app.directive('requestLoading', function () {
    return {
        scope: {
            requestLoading: '='
        },

        transclude: true,
        templateUrl: 'ng/custom-directives/request-loading-directive.html'
    };
});