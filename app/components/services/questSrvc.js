angular.module('triviaApp').service('questSrvc', function( $http, $q ) {
    var apiResults;
    this.getQuestions = function(){
        if (apiResults) {
            return $q.when([apiResults])
           
        }
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions').then(results=>{
            console.log('api results', results);
            apiResults = results.data;
           return results.data
        }
        )
    }
  })