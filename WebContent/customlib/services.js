/*Services*/

angular.module('pocApp.services',[]).
factory('restService',function($http){
	alert("i am rest Service");
	var restService={};
	restService.getDetails=function(){
		var theurl='api/owners/';
		return $http({
			method: 'GET', 
		 		url: theurl
		 	});
		
	};
	
	return restService;
	
}).factory('loginservice',function($http){
	alert("i am login service");
	var loginservice={};
	loginservice.getDetails=function(){
		var theurl='/login';
		return $http({
			method: 'GET', 
		 		url: theurl
		 	});
		
	};
	
	return loginservice;
	
	
	
});

