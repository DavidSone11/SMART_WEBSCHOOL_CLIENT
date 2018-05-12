var app = angular.module("myApp", []);

app.config(function ($provide) {
    $provide.provider('MathService', function () {
        this.$get = function () {
            return {
                multiply : function (a, b) {
                    return a * b;
                }
            };



        };
    });
});

app.value("defaultInput", 10);

app.factory('MathService', function () {
    return {
        multiply : function (a, b) {
            return a * b;
        }
    };
});

app.service('CalcService', function (MathService) {
    this.square = function (a) {
        return MathService.multiply(a, a);
    }
});

app.controller('CalcController', function ($scope, CalcService, defaultInput) {
    $scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);

    $scope.square = function () {
        $scope.result = CalcService.square($scope.number);
    }
});  
