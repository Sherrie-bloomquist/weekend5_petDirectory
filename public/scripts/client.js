console.log('js');

var myApp = angular.module ('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when("/home", {
      templateUrl: 'views/subviews/homeView.html',
      controller: "homeController"
    })
    .when("/addPet",{
      templateUrl: 'views/subviews/addPet.html',
      controller: "addPetController"
    })
    .when("/viewPet",{
      templateUrl: 'views/subviews/viewPet.html',
      controller: "viewPetController"
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);

// myApp.controller ('DirectoryController', ['$scope', '$http', function($scope, $http){
//   console.log('NG');

  myApp.controller("addPetController", ["$scope", "$http", function($scope, $http){
    console.log('in addPetController');

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
      alert($scope.petNameIn + ' has been added!');
    }; //end postPet
  }]); //end addPetController

myApp.controller("viewPetController", ["$scope", "$http", function($scope, $http){
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
  $scope.getPet();
}]);


myApp.controller('homeController', ["$scope", function($scope){
  console.log('in homeController');
}]);
