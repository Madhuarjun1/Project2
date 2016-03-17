// app.js
var demoApp = angular.module('DemoApp', ['ui.router','ui.bootstrap','DemoApp.controllers','DemoApp.directives']);

demoApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
         .state('home', {
            url: '/home',
            templateUrl: 'partials/AddUser.html'
        }).state('vieworUpdateorDelete', {
            url: '/view',
            templateUrl: 'partials/VieworUpdateorDelete.html'
        });
});