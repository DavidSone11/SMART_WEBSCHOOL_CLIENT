
var app = angular.module("dIApp");
app.directive("mainHeader", ['$compile', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'ng/directives/header/header.tmpl.html',

        controller: function ($scope, $state) {


            $scope.logout = function () {
                $state.go("login");

            }

            $scope.toggleSidebar = function (e) {
                $scope.isToggle = !$scope.isToggle;
                if ($scope.isToggle) {
                    $("#sidenav-header").hide();
                    $("#sidenav-header-logo").show();
                    $(".main-navbar").toggleClass("shrink");
                    $("#sub-page-wrapper").removeClass("page-wrapper");
                    $("#sub-page-wrapper").addClass("no-page-wrapper");
                    $("nav").addClass("no-nav-wrapper")
                } else {
                    $("#sidenav-header-logo").hide();
                    $("#sidenav-header").show();
                    $(".main-navbar").removeClass("shrink");
                    $("#sub-page-wrapper").addClass("page-wrapper");
                    $("nav").removeClass("no-nav-wrapper")
                    $("#sub-page-wrapper").removeClass("no-page-wrapper");
                    

                }
                var w = $(window).outerWidth();
                var h = $(window).outerHeight();
                // e.preventDefault(),


                    // (w > 1194) ? ($(".main-navbar").toggleClass("shrink"),
                    //     //$(".page-wrapper").toggleClass("no-page-wrapper"),

                    //     $("nav").toggleClass("no-nav-wrapper")
                    // ) : (

                    //         $(".main-navbar").toggleClass("show-sm"),
                    //         $(".page-wrapper").toggleClass("active-sm")
                    //     )

            }

        }

    }
}]);