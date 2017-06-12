angular.module('todoControllers',[])

       .controller('todoController',['$scope','todoService',function($scope,todoService){

           $scope.formData = {};

           todoService.get().then(function(response){
               $scope.todos = response.data;
           });

           $scope.createTodo = function(){
              if($scope.formData.text != undefined){
                  $scope.formData.done = false;
                  todoService.create($scope.formData).then(function(response){
                      $scope.formData = {};
                      $scope.todos = response.data;
                  });
              }
           }

           $scope.deleteTodo = function(id){

               todoService.delete(id).then(function(response){
                   $scope.todos = response.data;
               });
           }

           $scope.updateTodo = function(todo){
               todoService.update(todo).then(function(response){
                   $scope.todos = response.data;
               });
           }


       }]);
