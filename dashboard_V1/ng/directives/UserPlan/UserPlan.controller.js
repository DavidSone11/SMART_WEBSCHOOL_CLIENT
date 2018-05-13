
var app = angular.module("dIApp");
app.controller("UserPlanController",  ['$scope','$timeout','$http',function($scope,$timeout,$http) {
    $scope.userplans = [];
    $scope.isloading = true;

    $timeout(function () {
        $http.get('http://localhost:4000/api/v1/userPlan/getPlans').then(function (response) {
            $scope.userplans = response.data.results;
            $scope.isloading = false;
        });
    }, 2000)

}]);