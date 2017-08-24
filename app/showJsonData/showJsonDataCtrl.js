'use strict';

angular.module('myApp').controller('View7Ctrl', ['$scope','dataService',function (scope,dataService) {
    dataService.httpData().then(function (data) {
        scope.dataVal=data
        console.log(data);
    }).catch(function (err) {

    })

}]);