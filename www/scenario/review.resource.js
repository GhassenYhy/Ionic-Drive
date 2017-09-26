(function (angular) {
    'use strict';

    function FN($resource) {
        //URL of the API
        var url = "https://drive-safe-app-v2.herokuapp.com/api/review/:id";
        var params = {
            id: "@_id"
        };
        var customMethods = {
            'getReviews': {
                method: "GET",
                url: "https://drive-safe-app-v2.herokuapp.com/api/review/:id",
                isArray : true
            }
        };
        var Rest = $resource(url, params, customMethods);
        return Rest;
    }
    FN.$inject = ["$resource"];
    angular.module("app").factory('Review', FN);
})(angular);