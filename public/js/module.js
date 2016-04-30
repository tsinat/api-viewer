'use strict';

var app = angular.module('apiViewer', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: '/html/home.html',
          controller: 'homeCtrl'
      })
      .state('contact', {
          url: '/contact',
          templateUrl: '/html/contact.html',
          controller: 'contactCtrl'
      })
      .state('list', {
          url:'/list',
          templateUrl: '/html/list.html',
          controller: 'listCtrl'
      })
      .state('detail', {
          url: '/detail/:name',
          templateUrl: '/html/detail.html',
          controller: 'detailCtrl',
          resolve: {
            name:
              function(Pokemon, $stateParams) {
                  console.log($stateParams.name);
                // return a promise which will resolve to the person
                return Pokemon.getByName($stateParams.name);
            }
     }
    })

    $urlRouterProvider.otherwise('/');
});
