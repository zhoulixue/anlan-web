angular.module('rootApp.recruit',[
])
.config(function($routeProvider){
	 $routeProvider
        .when('/recruit', {
            templateUrl: 'views/recruit.html',
            controller: 'recruitController'
        })
        .when('/recruitCulture', {
            templateUrl: 'views/recruitCulture.html',
            controller: 'recruitController'
        })
})
.controller('recruitController',function ($scope,$http,$location) {
    $scope.showList = new Array();
    function getNews(){
        return $http.get("json/recruit.json")
        .catch(function(response){
        	throw new Error("数据请求失败,错误码:" + response.status);
        })
        .then(function(res){
        	$scope.totalList = res.data.news;
        	$scope.totalPage = Math.ceil($scope.totalList.length / 10);
        	$scope.pageTh = new Array($scope.totalPage);
        	for (var i = 0; i < $scope.pageTh.length; i++) {
        		$scope.pageTh[i] = i + 1;
        	}
        	if ($scope.currentPage === undefined || $scope.currentPage == null ||$scope.currentPage == "") {
	                $scope.currentPage = 1;
	        }
        	if ($scope.totalPage == 1) {
        		for (var i = 0; i < $scope.totalList.length; i++) {
        			$scope.showList[i] = $scope.totalList[i]
        		}
        	}else{
	            for (var i = $scope.currentPage*10 - 10; i < $scope.currentPage*10; i++) {
	                $scope.showList[i - ($scope.currentPage*10 - 10)] = $scope.totalList[i];
	            }
        	}
            
        })
    }
    getNews();
    $scope.changePage = function(item){
    	$scope.currentPage = item;
    	getNews();
    }
    $scope.changePageUp = function(){
    	if ($scope.currentPage == 1) {
    		alert("已经是第一页了");
    	}else{
    		$scope.currentPage -= 1;
    		getNews();
    	}
    }
    $scope.changePageDown = function(){
    	if ($scope.currentPage == $scope.totalPage) {
    		alert("已经是最后一页了");
    	}else{
    		$scope.currentPage += 1;
    		getNews();
    	}
    }
    $scope.jumpContent = function(item){
    	$location.url('/recruitContent?id=' + item.id);
    }
    $scope.jumpRecruitContent = function(item){
        $location.url('/recruitCultureContent?id=' + item.id);
    }
})