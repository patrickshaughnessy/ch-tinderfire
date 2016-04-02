angular.module('app')
.controller('FindTabCtrl', function($scope){
  $scope.match = {
    name: 'Bob',
    age: '24',
    image: './img/ionic.png',
    description: 'He is a fine Bob'
  }
})
