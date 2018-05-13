
var app = angular.module("dIApp");
app.controller("UserPlanController", ['$scope', '$timeout', '$http', function ($scope, $timeout, $http,$sce) {
    $scope.userplans = [];
    $scope.isloading = true;

    $timeout(function () {
        $http.get('http://localhost:4000/api/v1/userPlan/getPlans').then(function (response) {
            $scope.userplans = response.data.results;
            $scope.isloading = false;
        });

        $http.jsonp('http://localhost:4000/api/v1/userPlan/getPlans?callback=JSON_CALLBACK&limit=5&page=1&order=planName').then(function (response) {
            $scope.data = response;
        });



    }, 1000)

}]);