
var app = angular.module("dIApp");
app.controller("UserPlanController", ['$scope', '$timeout', '$http','$sce', function ($scope, $timeout, $http,$sce) {
    $scope.userplans = [];
    $scope.isloading = true;

    $scope.userPlanUrl = {src:"http://localhost:4000/api/v1/userPlan/getPlans?callback=JSON_CALLBACK&limit=5&page=1&order=planName"};
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
      }

    $timeout(function () {
        $http.get('http://localhost:4000/api/v1/userPlan/getPlans').then(function (response) {
            $scope.userplans = response.data.results;
            $scope.isloading = false;
        });

        // $http.jsonp($scope.userPlanUrl).then(function (response) {
        //     $scope.data = response;
        // });



    }, 1000)

}]);