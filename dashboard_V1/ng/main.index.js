var r = (function mainFun() {

    'use strict';
    var app = angular.module('dIApp', [
        'ui.router',
        'oc.lazyLoad',
        'ngAnimate',
        'angular-loading-bar',
        "ngSanitize"
    ]);

    var initInjector = angular.injector(['ng']);
    var $http = initInjector.get('$http');


    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login></login>',
                controller: 'LoginController',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/login/login.directive.js',
                            'ng/directives/login/login.controller.js',
                            'ng/factory/auth.Factory.js'

                        ]
                        );
                    }]
                }

            }).state('home', {
                url: '/home',
                templateUrl: 'ng/directives/home/home.tmpl.html',
                controller: 'HomeController',
                resolve: {
                    loadExternalFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'dIApp',
                            files: [
                                'ng/directives/home/home.directive.js',
                                'ng/directives/home/home.controller.js',
                                'ng/directives/sidebar/sidebar.directive.js',
                                'ng/directives/header/header.directive.js',
                                'ng/directives/footer/footer.directive.js',
                                'ng/directives/states/states.directive.js',
                                'ng/directives/header/header-notification/header-notification.directive.js',
                                'ng/factory/auth.Factory.js'

                            ]
                        });
                    }]
                }
            })
            .state('home.dashboard', {
                url: '/dashboard',
                templateUrl: 'ng/directives/dashboard/dashboard.tmpl.html',
                controller: 'DashboardController',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/dashboard/dashboard.controller.js',
                            'ng/factory/customer.factory.js',
                            'ng/custom-directives/toggleButton.directive.js',
                            'ng/custom-directives/loading-spinner.directive.js'

                        ]
                        );
                    }]
                }
            }).state('home.user', {
                url: '/user',
                template: '<user></user>',
                controller: 'UserController',
                resolve: {
                    loadAllMyDirectives: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/User/User.controller.js',
                            'ng/directives/User/User.directive.js',
                            'ng/custom-directives/loading-spinner.directive.js',
                            'ng/components/UserPlan/UserPlan.component.js'
                        ]
                        );
                    }],
                    getAllcomments: function () {
                        $http.get("https://jsonplaceholder.typicode.com/comments").then(function success(successResponse) {

                            // console.log(successResponse);

                        }, function error(errorResponse) {

                        });
                    }
                }
            }).state('home.userplan', {
                url: '/plan',
                template: '<user-plan></user-plan>',
                controller: 'UserPlanController',
                resolve: {
                    loadAllMyDirectives: ['$ocLazyLoad', function ($ocLazyLoad) {

                        return $ocLazyLoad.load([
                            'ng/directives/UserPlan/UserPlan.controller.js',
                            'ng/directives/UserPlan/UserPlan.directive.js',
                            'ng/custom-directives/loading-spinner.directive.js',

                        ]
                        );
                    }],

                }
            })
    });
}());