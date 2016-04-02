angular.module('app')
.controller('ProfileTabCtrl', function($scope){
  $scope.user = {
    name: 'Bob',
    age: '24',
    image: './img/ionic.png',
    description: 'He is a fine Bob'
  }

  $scope.takePicture = function() {
    if (!navigator.camera) return;
    navigator.camera.getPicture(function(imageURI) {

      // imageURI is the URL of the image that we can use for
      // an <img> element or backgroundImage.
      console.log(imageURI);
      $scope.user.image = imageURI;
    }, function(err) {

      // Ruh-roh, something bad happened

    });
  }
})
