'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!' +
            '');

        $routeProvider.when('/change', {
            templateUrl: 'change/change.html',
            controller: 'View4Ctrl'
        }).when('/dataList', {
            templateUrl: 'dataList/dataList.html',
            controller: 'View6Ctrl'
        }).when('/display', {
            templateUrl: 'display/display.html',
            controller: 'View5Ctrl'
        }).when('/login', {
            templateUrl: 'login/login.html',
            controller: 'View2Ctrl'
        }).when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'View1Ctrl'
        }).when('/forgot', {
            templateUrl: 'forgot/forgot.html',
            controller: 'View3Ctrl'
        }).when('/httpData', {
                templateUrl: 'showJsonData/showJsonData.html',
                controller: 'View7Ctrl'
            })
            .otherwise({redirectTo: '/signup'});
    }])
