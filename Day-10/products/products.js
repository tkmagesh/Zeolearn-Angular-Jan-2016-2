var productsModule = angular.module("myApp.products", ["ngRoute"]);

productsModule.config(function($routeProvider){
            $routeProvider
                .when('/products', {
                    /*template : '<h2>Products</h2>'*/
                    templateUrl : 'products/productsTemplate.html',
                    controller : 'productsController'
                })
                .when('/products/:id', {
                    templateUrl : 'products/productInfoTemplate.html',
                    controller : 'productInfoController'
                });
        })

productsModule.service("productsService", function(){
            this.getAll = function(){
                return [
                    {id :1, name : 'Pen', cost : 5, units : 100, desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro facere architecto deleniti, placeat aperiam similique aliquam veritatis recusandae libero! Ea praesentium neque odio eligendi nobis! Aliquid dicta eligendi pariatur cumque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti veritatis ut id natus cumque, minus aliquam quasi repellendus odit pariatur, nemo vel numquam deserunt animi debitis quod. Incidunt, harum, aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cumque debitis. Nulla totam quam, ullam optio tempore fuga, corrupti, minima a eius asperiores nesciunt incidunt atque porro vero repellendus voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet ab minima placeat accusantium deleniti pariatur, temporibus ipsam repudiandae totam fuga quaerat nam cupiditate dolorem omnis recusandae adipisci eos fugit.'},
                    {id :2, name : 'Hen', cost : 100, units : 20, desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro facere architecto deleniti, placeat aperiam similique aliquam veritatis recusandae libero! Ea praesentium neque odio eligendi nobis! Aliquid dicta eligendi pariatur cumque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti veritatis ut id natus cumque, minus aliquam quasi repellendus odit pariatur, nemo vel numquam deserunt animi debitis quod. Incidunt, harum, aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cumque debitis. Nulla totam quam, ullam optio tempore fuga, corrupti, minima a eius asperiores nesciunt incidunt atque porro vero repellendus voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet ab minima placeat accusantium deleniti pariatur, temporibus ipsam repudiandae totam fuga quaerat nam cupiditate dolorem omnis recusandae adipisci eos fugit.'},
                    {id :3, name : 'Ten', cost : 10, units : 10, desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro facere architecto deleniti, placeat aperiam similique aliquam veritatis recusandae libero! Ea praesentium neque odio eligendi nobis! Aliquid dicta eligendi pariatur cumque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti veritatis ut id natus cumque, minus aliquam quasi repellendus odit pariatur, nemo vel numquam deserunt animi debitis quod. Incidunt, harum, aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cumque debitis. Nulla totam quam, ullam optio tempore fuga, corrupti, minima a eius asperiores nesciunt incidunt atque porro vero repellendus voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet ab minima placeat accusantium deleniti pariatur, temporibus ipsam repudiandae totam fuga quaerat nam cupiditate dolorem omnis recusandae adipisci eos fugit.'},
                    {id :4, name : 'Zen', cost : 100000, units : 0, desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro facere architecto deleniti, placeat aperiam similique aliquam veritatis recusandae libero! Ea praesentium neque odio eligendi nobis! Aliquid dicta eligendi pariatur cumque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti veritatis ut id natus cumque, minus aliquam quasi repellendus odit pariatur, nemo vel numquam deserunt animi debitis quod. Incidunt, harum, aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cumque debitis. Nulla totam quam, ullam optio tempore fuga, corrupti, minima a eius asperiores nesciunt incidunt atque porro vero repellendus voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet ab minima placeat accusantium deleniti pariatur, temporibus ipsam repudiandae totam fuga quaerat nam cupiditate dolorem omnis recusandae adipisci eos fugit.'}
                ]
            };

            this.get = function(id){
                return this.getAll().filter(function(product){
                    return product.id === id;
                })[0];
            };
        });

productsModule.controller("productsController", function($scope, productsService){
            $scope.products = productsService.getAll();
        });

productsModule.controller("productInfoController", function($scope, $routeParams, productsService){
            var productId = parseInt($routeParams.id);
            $scope.product = productsService.get(productId);
        })
