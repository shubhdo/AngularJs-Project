'use strict';

angular.module('myApp').service('dataService',function ($q,$http) {

        var self=this;
        self.dataArray=[];
        self.currentData=null;
        self.httpData=function() {
            return $q(function (resolve, reject) {
                $http({
                    method: 'GET',
                    url: '../js/data.json'
                }).then(function successCallback(response) {
                    console.log(response.data);
                    resolve(response.data)
                }, function errorCallback(response) {
                    reject(response.statusText)
                });

            })
        }
    });
