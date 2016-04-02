// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/tab/find');

  $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "partials/tabs.html"
      })
      .state('tabs.find', {
        url: "/find",
        views: {
          'find-tab': {
            templateUrl: "partials/find.html",
            controller: 'FindTabCtrl'
          }
        }
      })
      .state('tabs.profile', {
        url: "/profile",
        views: {
          'profile-tab': {
            templateUrl: "partials/profile.html",
            controller: 'ProfileTabCtrl'
          }
        }
      })
      .state('tabs.settings', {
        url: "/settings",
        views: {
          'settings-tab': {
            templateUrl: "partials/settings.html",
            controller: 'SettingsTabCtrl'
          }
        }
      })

});
