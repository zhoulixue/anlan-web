angular.module('rootApp.certificate',[
])
.config(function($routeProvider){
	 $routeProvider
        .when('/certificate', {
            templateUrl: 'views/certificate.html',
            controller: 'certificateController'
        })
})
.controller('certificateController',function($scope,$http,$location){

})