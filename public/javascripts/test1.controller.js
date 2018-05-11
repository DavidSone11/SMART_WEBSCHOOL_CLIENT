var app = angular.module("myApp", []);
app.service("HitCounter", function HitCounterService() {

    var i = 0;
    this.Hit = function () {
        i++;
        console.log(i);
    }
    return this;
});

app.controller("mainClass", function MyClass($scope, HitCounter) {
    $scope.HitCounter = HitCounter;
});



