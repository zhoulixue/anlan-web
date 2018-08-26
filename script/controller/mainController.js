angular.module('rootApp.main',[
])
.config(function($routeProvider){
	 $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController'
        })
})
.controller('mainController',function($scope,$http,$location){
	$scope.newsList = new Array();
    $scope.projectList = new Array();
    $scope.recruitList = new Array();
    function getNews(){
        return $http.get("json/newsTrade.json")
        .catch(function(response){
        	throw new Error("数据请求失败,错误码:" + response.status);
        })
        .then(function(res){
        	$scope.totalList = res.data.news;
            if ($scope.totalList.length < 6) {
                for (var i = 0; i < $scope.totalList.length; i++) {
                    $scope.newsList[i] = $scope.totalList[i]
                }
            }else{
                for (var i = 0; i < 6; i++) {
                    $scope.newsList[i] = $scope.totalList[i]
                }
            }
        })
    }
    function getProject(){
        return $http.get("json/project.json")
        .catch(function(response){
            throw new Error("数据请求失败,错误码:" + response.status);
        })
        .then(function(res){
            $scope.totalList = res.data.news;
            if ($scope.totalList.length < 6) {
                for (var i = 0; i < $scope.totalList.length; i++) {
                    $scope.projectList[i] = $scope.totalList[i]
                }
            }else{
                for (var i = 0; i < 6; i++) {
                    $scope.projectList[i] = $scope.totalList[i]
                }
            }
        })
    }
     function getRecruit(){
        return $http.get("json/recruit.json")
        .catch(function(response){
            throw new Error("数据请求失败,错误码:" + response.status);
        })
        .then(function(res){
            $scope.totalList = res.data.news;
            if ($scope.totalList.length < 6) {
                for (var i = 0; i < $scope.totalList.length; i++) {
                    $scope.recruitList[i] = $scope.totalList[i]
                }
            }else{
                for (var i = 0; i < 6; i++) {
                    $scope.recruitList[i] = $scope.totalList[i]
                }
            }
        })
    }
    getNews();
    getProject();
    getRecruit();
    $scope.jumpNewsContent= function(item){
        $location.url('/newsTradeContent?id=' + item.id);
    }
    $scope.jumpProjectContent= function(item){
        $location.url('/projectContent?id=' + item.id);
    }
    $scope.jumpRecruitContent= function(item){
        $location.url('/recruitContent?id=' + item.id);
    }
})