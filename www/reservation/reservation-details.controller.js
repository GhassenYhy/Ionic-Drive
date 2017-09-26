(function (angular) {
    'use strict';
    function ControllerFN($scope, $state, Session,Reservation) {
        $scope.reservation = Session.getReservations()[$state.params.id];
        $scope.idReservation = $state.params.id;
        function onlyUnique(value, index, self) {
            return self.map(x=>x._id).indexOf(value._id) === index;
        }
        var temp = [];
        $scope.reservation.scenarios.map(x=>x.skills.map(xx=> temp.push(xx.skill)));
        $scope.skills = temp.filter(onlyUnique);
    }
    ControllerFN.$inject = ['$scope','$state','Session','Reservation'];
    angular.module('app').controller('ReservationDetailsController', ControllerFN);
})(angular);