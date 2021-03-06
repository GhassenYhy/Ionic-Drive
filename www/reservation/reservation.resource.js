(function (angular) {
    'use strict';

    function FN($resource) {
        //URL of the API
        var url = "https://drive-safe-app-v2.herokuapp.com/api/reservation/:id";
        var params = {
            id: "@_id"
        };
        var customMethods = {
            'update': {
                method: "PUT"
            },
            'getReservations': {
                method: "GET",
                url: "https://drive-safe-app-v2.herokuapp.com/api/reservation/:id",
                isArray : true
            }
        };
        var Reservation = $resource(url, params, customMethods);
        return Reservation;
    }
    FN.$inject = ["$resource"];
    angular.module("app").factory('Reservation', FN);
})(angular);