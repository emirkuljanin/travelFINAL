'use strict';

angular.module('fullstackApp')
   .controller('TravelsEditCtrl', function ($scope , $state,  TravelsResource, $stateParams) {
       $scope.message = 'Hello';
       $scope.travel = {};

    if($stateParams.id){
        TravelsResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.travel = response;
        });
    }

    $scope.save = function(){
      $scope.travel.documents = [{_id: '56f1dd3c9e2ec4c431f16dde'}, {_id: '56f1dbcef26343481b4adc96'}];
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
      $scope.addDocument = function(){
        $state.go('travels.addDoc' , { travelId: $stateParams.id} );
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
