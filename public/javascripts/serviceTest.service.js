'use strict';
            angular.module('animal', [])
                .factory('Animal',function(){
                        return {
                            vocalization:'',
                            vocalize : function () {
                                console.log('vocalize: ' + this.vocalization);
                            }
                        }

                });
                angular.module('dog', ['animal'])
                    .factory('Dog', function (Animal) {
                        Animal.vocalization = 'bark bark!';
                        Animal.color = 'red';
                        return Animal;
                    });

                angular.module('cat', ['animal'])
                   .factory('Cat', function (Animal) {
                        Animal.vocalization = 'meowwww';
                        Animal.color = 'white';
                        return Animal;
                    });
                 angular.module('app', ['dog','cat'])
                .controller('MainCtrl',function($scope,Cat,Dog){
                     $scope.cat = Cat;
                     $scope.dog = Dog;
                     console.log($scope.cat);
                     console.log($scope.dog);
                    //$scope.cat = Cat;
                });