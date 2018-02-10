angular.module('triviaApp').controller('main',function($scope, $rootScope, questSrvc){
    $scope.showModal = false;

    $scope.open = function(type){
        console.log('hitting open')
        if (type==="add"){
            $scope.showModal = !$scope.showModal;
        }
        if (type==="gear"){
            // $scope.openGear = $rootScope.openGear;
        }
    }

    $scope.add = function(body){
        questSrvc.addQuestion(body);
        $scope.showModal = !$scope.showModal;
    }
  })