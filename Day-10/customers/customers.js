var customersModule = angular.module("myApp.customers", ["ngRoute"]);
customersModule.config(function($routeProvider){
    $routeProvider
          .when('/customers', {
            /*template : '<h2>Customers</h2>'*/
            templateUrl : 'customers/customersTemplate.html'
        })
});
