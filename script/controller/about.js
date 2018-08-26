angular.module('rootApp.about',[
])
.config(function($routeProvider){
	$routeProvider
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .when('/law', {
            templateUrl: 'views/law.html',
            controller: 'aboutController'
        })
        .when('/conact', {
            templateUrl: 'views/conact.html',
            controller: 'aboutController'
        })
        .when('/join', {
            templateUrl: 'views/join.html',
            controller: 'aboutController'
        })
})
.controller('aboutController',function($scope,$http,$location){

})