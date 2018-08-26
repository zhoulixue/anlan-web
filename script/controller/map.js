angular.module('rootApp.map',[
])
.config(function($routeProvider){
	 $routeProvider
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'mapController'
        })
})
.controller('mapController',function($scope,$http,$location){
	function getProject(){
        return $http.get("json/project.json")
        .catch(function(response){
            throw new Error("数据请求失败,错误码:" + response.status);
        })
        .then(function(res){
            $scope.projectList = res.data.news;
        })
    }
    getProject();
    $scope.projectContent = function(item){
    	$location.url('/projectContent?id=' + item.id);
    }

    function getRecruit(){
        return $http.get("json/recruit.json")
        .catch(function(response){
            throw new Error("数据请求失败,错误码:" + response.status);
        })
        .then(function(res){
            $scope.recruitList = res.data.news;
        })
    }
    getRecruit();
    $scope.projectContent = function(item){
    	$location.url('/recruitContent?id=' + item.id);
    }
})