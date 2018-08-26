angular.module('rootApp.newsTrade',[
])
.config(function($routeProvider){
	 $routeProvider
        .when('/newsTrade', {
            templateUrl: 'views/newsTrade.html',
            controller: 'newsTradeController'
        })
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsTradeController'
        })
})
.controller('newsTradeController',function ($scope,$http,$location) {
    $scope.showList = new Array();
    function getNews(){
        return $http.get("json/newsTrade.json")
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
                if ($scope.currentPage == $scope.totalPage) {
                    $scope.showList.length = $scope.totalList.length - ($scope.currentPage-1) * 10;
                }else{
                    $scope.showList.length = 10;
                }
                var i = $scope.currentPage*10 - 10;
                var j = 0;
                while( j < $scope.showList.length){
                    $scope.showList[j] = $scope.totalList[i];
                    i++;
                    j++;
                }
	            // for (var i = $scope.currentPage*10 - 10; i < $scope.currentPage*10 && i < $scope.totalList.length; i++) {
	            //     $scope.showList[i - ($scope.currentPage*10 - 10)] = $scope.totalList[i];
	            // }
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
    	$location.url('/newsTradeContent?id=' + item.id);
    }
    $scope.jumpNewsContent= function(item){
        $location.url('/newsContent?id=' + item.id);
    }
})