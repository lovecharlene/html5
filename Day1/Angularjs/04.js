var bookStoreApp=angular.module('bookStoreApp',['ngRoute','ngAnimate','bookStoreCtrls','bookStroeFilters','bookStroServices','bookStroreDirectives']);

bookStoreApp.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl:'tpls/hello.html',
		controller:'HelloCtrl'
	}).when('/list',{
		templateUrl:'tpls/bookList.html',
		controller:'BookListCtrl'
	}).otherwise({
		redirectTo:'/hello'
	})
});
