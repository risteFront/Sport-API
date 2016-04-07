angular.module('API_Sports')
.controller('priviewCtrl', ['$scope','$http','callApi', function($scope,$http,callApi){
  $scope.Id ={};
  $scope.Id.preID = 398;
  $scope.Id.bunID =394;
  callApi.url
 .then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(response)
    $scope.bundes = response.data[0].numberOfTeams
    $scope.premiere = response.data[4].numberOfTeams
    $scope.italia = response.data[7].numberOfTeams
    $scope.spanish = 20;


  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


   }])   