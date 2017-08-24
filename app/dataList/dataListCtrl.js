'use strict';

angular.module('myApp').controller('View6Ctrl', ['$scope','dataService','$location',function (scope,dataService,location) {
       scope.dataval=dataService.dataArray;
       scope.seeMore=function (data) {
           dataService.currentData=data;
           location.path("/display");
       };

    function myMap() {
        var mapProp = {
            center: new google.maps.LatLng({lat: dataService.dataArray[0].lat, lng: dataService.dataArray[0].lng}),
            zoom: 2
        };


        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        for (var i=0;i<dataService.dataArray.length;i++) {
            var myLatLng = {lat: dataService.dataArray[i].lat, lng: dataService.dataArray[i].lng};

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: "Hi This is " + dataService.dataArray[i].fname + " Contact me on " + dataService.dataArray[i].contact
            });
        }
    }
    google.maps.event.addDomListener(window, 'load', myMap());
    }]);