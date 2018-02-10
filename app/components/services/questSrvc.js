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

    this.updateQuestion = function(body){
        let id = body._id;
        return $http.put(`https://practiceapi.devmountain.com/api/trivia/questions/${id}`, body).then(results=>{
            return results;
        })
    }

    this.addQuestion = function(body){
        return $http.post(`https://practiceapi.devmountain.com/api/trivia/questions`, body).then(results=>{
            return results;
        })
    }

    this.deleteQuestion = function(id){
        console.log("harpy", id)
        return $http.delete(`https://practiceapi.devmountain.com/api/trivia/questions/${id}`).then(results=>{
            return results;
        })
    }

  })