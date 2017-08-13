var app = angular.module('myApp',['ngRoute', 'ngSanitize']);
app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        template:`<h1>{{title}}</h1>`,
        controller:function($scope){
            $scope.title = "This is home page";
        }
    })
    .when('/about', {
        template:`<h1>{{title}}</h1>`,
        controller:function($scope){
            $scope.title = "This is about us page";
        }
    })
    .when('/gallery',{
        template:`<h1>{{title}}</h1>`,
        controller:function($scope){
            $scope.title = "This is gallery";
        }
    })
    .otherwise({
        redirectTo:'/'
    })
})
app.controller("myctrl", function($scope){
    $scope.title = "This is home page";
})