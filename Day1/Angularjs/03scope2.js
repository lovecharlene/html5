var app = angular.module("app", []);
app.controller("GreetCtrl", function($scope, $rootScope){
	$scope.name="world";
	$rootScope.department="Angular";
});

app.controller("ListCtrl", function($scope){
	$scope.names = ['Igor','Misko','Vojta'];
});
