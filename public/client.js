console.log('js');

var myApp = angular.module ('myApp', []);

myApp.controller ('DirectoryController', ['$scope', '$http', function($scope, $http){
  console.log('NG');

$scope.getPet = function(){
  console.log('searching for:', $scope.petNameIn);
  $http({
    method: "GET",
    url: "/petdirectory"
  }).then(function(response){
    console.log('back from get call:', response);
    $scope.directoryResults = response.data;
  }); //end http get call
}; //end getPet

$scope.postPet = function(){
  console.log('in postPet');
  var newPet = {
    name: $scope.petNameIn,
    type: $scope.typeOfAnimalIn,
    age: $scope.petAgeIn,
    imgUrl: $scope.picUrlIn
  };//end var newPet object
  console.log('newPet', newPet);

  //make http call to database to send user inputs
  $http({
    method: "POST",
    url: "/petdirectory",
    data: newPet
  }).then(); //end http post call
  $scope.getPet();
}; //end postPet

$scope.getPet();

}]); //end controller
