'use strict';
var app = angular.module('myApp', [])
app.service("sampleService", function ($timeout) {
    n: 1;
    this.getSample = function () {
        return this.n;
    }

    this.setSample = function (num) {
        this.n = num;
    }

});

app.controller("sampleCtrl", function ($scope, sampleService) {

    $scope.s = sampleService.getSample();
    console.log($scope.s);

    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
        setTimeout(function (i_local) {

            console.log('The index of this number is: ' + i_local);

        }(i), 3000);
    }

    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log('The index of this number isss: ' + i);

        }, 1000 + i);
    }
    var bar = null;
    console.log(typeof bar === "object");
    console.log((bar !== null) && (typeof bar === "object"));  // logs false

    function foo1() {
        return {
            bar: "hello"
        };
    }

    function foo2() {
        return
        {
            bar: "hello"
        };
    }
    console.log("foo1 returns:", foo1());
    console.log("foo2 returns:", foo2());
    var d = {};
    ['zebra', 'horse'].forEach(function (k) {
        d[k] = undefined;
        console.log(d[k]);
    });
})