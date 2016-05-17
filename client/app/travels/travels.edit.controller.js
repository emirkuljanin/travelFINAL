'use strict';

angular.module('fullstackApp')
   .controller('TravelsEditCtrl', function ($scope , $state,  TravelsResource, $stateParams) {
       $scope.message = 'Hello';

    if($stateParams.id){
        TravelsResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.travel = response;
        });
    }

    $scope.save = function(){
        if($stateParams.id){
            TravelsResource.update({ id: $stateParams.id} , $scope.travel).$promise.then(function(response){
                $scope.travel = response;
            });
        }else {
            TravelsResource.save( $scope.travel).$promise.then(function(response){
                $state.go('travels.edit' , { id: response._id} );
                $scope.travel = response;
            });
        }
      };
      /*      $scope.update = function() {
              TravelsResource.update({id: $scope.travel._id, name: $scope.travel.name, info: $scope.travel.info,
                 description: $scope.travel.description, travelOwner: $scope.travel.travelOwner,travelNumber: $scope.travel.travelNumber,
                 clientName: $scope.travel.clientName, active: $scope.travel.active, }, function() {
            });
            };
            $scope.delete = function() {
              TravelResource.remove({id: $scope.travel._id}, function()
              {
              });
            };
      */

      });
