var myApp = angular.module('myApp', ['ngRoute','myApp.products', 'myApp.customers']);
myApp.config(function($routeProvider){
    $routeProvider
        .otherwise({
            redirectTo : '/products'
        });
});
