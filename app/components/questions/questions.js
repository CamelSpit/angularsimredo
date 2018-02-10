angular.module('triviaApp').component('questions', {
    templateUrl: 'app/components/questions/questions.html',
    controllerAs: 'questCtrl',
    controller: function (questSrvc){
        var flag;
        if(!flag) {
            questSrvc.getQuestions().then(res => {
                this.questions = res;
                // console.log(this.questions)
            });
            flag = true;
        }
    }
})