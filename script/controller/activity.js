angular.module('rootApp.activity',[
])
.config(function($routeProvider){
	 $routeProvider
        .when('/activity', {
            templateUrl: 'views/activity.html',
            controller: 'activityController'
        })
})
.controller('activityController',function($scope,$http,$location){

})