
var app = angular.module("dIApp");
app.controller("DashboardController", function ($scope, Customerfactory) {
    $scope.Customer = {};
    $scope.Init = function (TypeofCustomer) {
        if (TypeofCustomer == "1") {
            $scope.Customer = Customerfactory.CreateWithAddress();
        }
        if (TypeofCustomer == "2") {
            $scope.Customer = Customerfactory.CreateWithPhone();
        }
        if (TypeofCustomer == "3") {
            $scope.Customer = Customerfactory.CreateWithPhoneAddress();
        }
    }
});