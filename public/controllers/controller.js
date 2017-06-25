var app=angular.module('myapp',[]);

app.controller("mycntrl",function($scope,$http)
{
    //console.log("controller called");
    console.log("we are here");
$scope.add_info=function()
{
 console.log($scope.contact);
 $http.post('/config',$scope.contact);
 $http.get('/config').then(function(response){
$scope.con=response.data;


   });

}
  $http.get('/config').then(function(response){
$scope.con=response.data;


   });

})