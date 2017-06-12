angular.module('todoServices',[])

       .factory('todoService',['$http',function($http){
           return{
               get : function(){
                   return $http.get('/api/todos');
               },
               create : function(todo){
                   return $http.post('/api/todos',todo);
               },
               delete : function(id){
                   return $http.delete('/api/todos/'+id);
               },
               update : function(todo){
                   return $http.post('/api/todos/update',todo);
               }
           }
       }]);
