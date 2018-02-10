angular.module('triviaApp').controller('hackCtrl',function($scope, $rootScope){
    $scope.answer = function(value, correct){
        if (value==correct){
           $scope.class='correct'
        }
        else{
            $scope.class='incorrect'
        }
    }
    $scope.openGear = false;

    $scope.open = function(type){
        console.log('hitting open hack')
        if (type==="add"){
            $scope.showModal = !$scope.showModal;
        }
        if (type==="gear"){
            $scope.openGear = !$scope.openGear;
        }
    }
  })