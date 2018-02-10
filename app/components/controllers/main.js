angular.module('triviaApp').controller('main',function($scope){
    $scope.showModal = false;
    $scope.open = function(){
        console.log('hitting open')
        $scope.showModal = !$scope.showModal;
    }

  })