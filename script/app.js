angular.module('rootApp',[
	'ngRoute',
    'ngSanitize',
    'rootApp.main',
    'rootApp.newsTrade',
    'rootApp.newsTradeContent',
    'rootApp.newsMarket',
    'rootApp.newsMarketContent',
    'rootApp.newsHoliday',
    'rootApp.newsHolidayContent',
    'rootApp.project',
    'rootApp.projectContent',
    'rootApp.recruit',
    'rootApp.recruitContent',
    'rootApp.certificate',
    'rootApp.activity',
    'rootApp.about',
    'rootApp.map'
])

.config(function($routeProvider){

})

.controller('rootController',function ($scope,$http) {
  
})