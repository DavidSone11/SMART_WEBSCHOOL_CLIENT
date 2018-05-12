var app = angular.module('dIApp');
app.directive('toggleButton', ['$http', '$timeout', function ($http, $timeout) {
    return {
        restrict: 'E',
        templateUrl: 'ng/custom-directives/toggleButton.tmpl.html',
        replace: true,
        scope: {
            label: '@',
            isLoad: '='
        },
        link: function (scope, element, attrs) {


        },
        controller: function ($scope, $state) {

            $scope.status = false;
            $scope.changeStatus = function () {
                $scope.status = !$scope.status;
                if ($scope.status) {
                    $("#sidenav-header").hide();
                    $("#sidenav-header-logo").show();
                    $(".main-navbar").toggleClass("shrink");
                    // $("#sub-page-wrapper").removeClass("page-wrapper");
                    $("#sub-page-wrapper").addClass("no-page-wrapper");
                    $("#sub-page-wrapper").addClass("no-page-wrapper-animate-hide");


                    $("nav").addClass("no-nav-wrapper")
                } else {
                    $("#sidenav-header-logo").hide();
                    $("#sidenav-header").show();
                    $(".main-navbar").removeClass("shrink");
                    $("#sub-page-wrapper").addClass("page-wrapper");
                    $("nav").removeClass("no-nav-wrapper")
                    $("#sub-page-wrapper").removeClass("no-page-wrapper");


                }
            }


        }
    };
}])