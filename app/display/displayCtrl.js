'use strict';

angular.module('myApp').controller('View5Ctrl', ['$scope', 'dataService', function (scope, dataService) {
    scope.toggle = dataService.currentData;
    var myLatLng;
    if (dataService.currentData !== null) {
        scope.fname = dataService.currentData.fname;
        scope.lname = dataService.currentData.lname;
        scope.email = dataService.currentData.email;
        scope.contact = dataService.currentData.contact;
        scope.address = dataService.currentData.address;


    }


    function myMap() {
        var mapProp = {
            center: new google.maps.LatLng(myLatLng),
            zoom: 10
        };


        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            label: {
                color: '#000000',
                fontWeight: 'bold',
                text: "Hi This is " + dataService.currentData.fname + " Contact me on " + dataService.currentData.contact,
            },
        });
    }

    console.log(dataService.currentData)
    if (dataService.currentData) {
        myLatLng = {lat: dataService.currentData.lat, lng: dataService.currentData.lng};

        google.maps.event.addDomListener(window, 'load', myMap());
    }

}]);