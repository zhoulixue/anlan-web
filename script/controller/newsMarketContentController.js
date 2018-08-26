angular.module('rootApp.newsMarketContent',[
])
.config(function($routeProvider){
	 $routeProvider
        .when('/newsMarketContent', {
            templateUrl: 'views/newsMarketContent.html',
            controller: 'newsMarketContentController'
        })
})
.controller('newsMarketContentController',function ($scope,$http,$location) {
    $scope.newsId = $location.search().id;
    function getNews(){
        return $http.get("json/newsMarket.json")
        .catch(function(response){
        	throw new Error("数据请求失败,错误码:" + response);
        })
        .then(function(res){
            for (var i = 0; i < res.data.news.length; i++) {
                if (res.data.news[i].id == $scope.newsId) {
                    $scope.currentNews = res.data.news[i];
                    $scope.preNews = res.data.news[i-1];
                    $scope.nextNews = res.data.news[i+1];
                }
            }
            if ($scope.preNews === undefined || $scope.preNews === null || $scope.preNews === "") {
                $scope.preNewsMsg = "暂时没有";
            } else {
                $scope.preNewsMsg = $scope.preNews.title;
            }
            if ($scope.nextNews === undefined || $scope.nextNews === null || $scope.nextNews === "") {
                $scope.nextNewsMsg = "暂时没有";
            } else {
                $scope.nextNewsMsg = $scope.nextNews.title;
            }
        })

    }
    getNews();

    $scope.toPreNews = function(preNews){
        if (preNews === undefined || preNews === null || preNews === "") {
            alert("已经是第一篇了！");
        } else {
            $location.url('/newsMarketContent?id=' + preNews.id)
        }
    }

    $scope.toNextNews = function(nextNews){
        if (nextNews === undefined || nextNews === null || nextNews === "") {
            alert("已经是最后一篇了！");
        } else {
            $location.url('/newsMarketContent?id=' + nextNews.id)
        }
    }
})