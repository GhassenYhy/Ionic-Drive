(function (angular) {
    'use strict';

    function FN($resource) {
        //URL of the API
        var url = "https://drive-safe-app-v2.herokuapp.com/api/scenario/:id";
        var params = {
            id: "@_id"
        };
        var customMethods = {

        };
        var Rest = $resource(url, params, customMethods);
        return Rest;
    }
    FN.$inject = ["$resource"];
    angular.module("app").factory('Scenario', FN);
})(angular);