angular.module('API_Sports',['ngRoute','ui.bootstrap'])
.constant('base_url','http://api.football-data.org/v1/soccerseasons/?season=2015')
.service('callApi',function($http,base_url){
return{
  url:$http({
  method: 'GET',
  url:base_url,
  headers:{ 'X-Auth-Token': '7ae6f7832b1842858cdb932a478dd548' },
})
}
})
.config(function($httpProvider,$routeProvider,base_url) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

      $routeProvider.when('/home',{
        controller:'priviewCtrl'
      })
      .when('/bundes',{
        templateUrl:'views/bundes.html',
        controller:"bundesCtrl"
      })
       .when('/france',{
        templateUrl:'views/france.html',
        controller:"spainCtrl"
      })
         .when('/germany',{
        templateUrl:'views/germany.html',
        controller:"germanyCtrl"
      })
        .when('/italia',{
        templateUrl:'views/italia.html',
        controller:"italiaCtrl"
      })


  })
