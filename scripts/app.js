(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.message = "";
  $scope.dishes = "";
  $scope.checkIfTooMuch = function(){
    var dishes = $scope.dishes.trim();
    if(dishes === ""){
      $scope.message = "Please enter data first";
      return;
    }
    var dishesArray = dishes.split(",");
    if(dishesArray.length <= 3){
      $scope.message = "Enjoy!"
    }else{
      $scope.message = "Too much!";
    }

  };
}

})();
