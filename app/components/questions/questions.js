angular.module('triviaApp').component('questions', {
    templateUrl: 'app/components/questions/questions.html',
    controllerAs: 'questCtrl',
    controller: function (questSrvc, $scope, $rootScope){
        // $scope.filter = $rootScope.filter;
        setTimeout(function() {
            console.log('rootscope', $rootScope.filter)
            $scope.filter = $rootScope.filter;
        }, 5000)
        var flag;
        if(!flag) {
            questSrvc.getQuestions().then(res => {
                this.questions = res;
            });
            flag = true;
        }

        this.update = function(body){
            questSrvc.updateQuestion(body);
        }

        this.delete = function(body){
            let id = body._id;
            console.log("hitting delete", id, body)
            questSrvc.deleteQuestion(id)
        }
        
    }
})