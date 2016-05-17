'use strict';

angular.module('fullstackApp')
  .controller('TravelsCtrl', function ($scope , $location, $state , $stateParams, TravelsResource) {
    $scope.message = 'Hello';

    $scope.getTravels = function functionName() {
              TravelsResource.query().$promise.then(function (response) {
            $scope.travels = response;
        });
    };

    $scope.newTravel = function(){
        $state.go('travels.new');
    };


        $scope.editTravel = function(travelId){
            $state.go('travels.edit', {id: travelId});
        };

    $scope.delete = function(travelId) {
        TravelsResource.delete({id : travelId}).$promise.then(function (){
            $scope.getTravels();
        });
    };

    $scope.getTravels();

         });
