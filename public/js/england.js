
angular.module('API_Sports')
.controller('bundesCtrl', ['$scope','$http','$uibModal','$log','$location',
	function($scope,$http,$uibModal, $log,$location){
	


	$scope.days=[
	]
	for (var i = 1; i <= 33; i++) {
		var day = i
		$scope.days.push(day);
	}

    $scope.open = function (index, size) {
    // call result match from poremiere league or league 1
    if(index === 0 ){
    	var id =398;
    }else if(index ===1){
    	var id =425;
    }
    $scope.tableRes = {};
    $http.get('http://api.football-data.org/v1/soccerseasons/'+id+'/leagueTable',{headers:{'X-Auth-Token': '7ae6f7832b1842858cdb932a478dd548'}})
    .success(function(data){

    	$scope.tableRes = data.standing;
    	$scope.animationsEnabled = true;

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/myModalContent.html',
      controller: 'fakeCtrl',
      resolve: {
        tableRes: function () {
          return $scope.tableRes
        }
      }
    });
     modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
      $location.path('/bundes');
    }); 
 
    
    })
    	   
   
   
  };

 //povik do england result

(function selfCall(){
	$scope.bundeID=398;
	$scope.matchday={}
	$scope.matchday.day =1;
$scope.$watch('matchday.day',function(newval , oldval){
		$scope.matchday.day = newval;
		$http({
		  method: 'GET',
		  url:' http://api.football-data.org/v1/soccerseasons/'+$scope.bundeID+'/fixtures?matchday='+$scope.matchday.day,
		  headers:{ 'X-Auth-Token': '7ae6f7832b1842858cdb932a478dd548' },
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    $scope.homeMatch =response.data.fixtures

		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
		$http.get('http://api.football-data.org/v1/soccerseasons/<425></425>/fixtures?matchday='+$scope.matchday.day,
			{headers:{ 'X-Auth-Token': '7ae6f7832b1842858cdb932a478dd548' }}).success(function(data){
			$scope.homeMatch2= data.fixtures
		})
	})
	$http({
  method: 'GET',
  url:' http://api.football-data.org/v1/soccerseasons/'+$scope.bundeID+'/fixtures?matchday='+$scope.matchday.day,
  headers:{ 'X-Auth-Token': '7ae6f7832b1842858cdb932a478dd548' },
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.homeMatch =response.data.fixtures

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

})()
	
}])
.controller('fakeCtrl',function($scope,$uibModalInstance,tableRes){
	$scope.tableRes= tableRes;
})