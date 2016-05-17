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
              CasesResource.update({id: $scope.case._id, name: $scope.case.name, info: $scope.case.info,
                 description: $scope.case.description, caseOwner: $scope.case.caseOwner,caseNumber: $scope.case.caseNumber,
                 clientName: $scope.case.clientName, active: $scope.case.active, }, function() {
            });
            };
            $scope.delete = function() {
              CasesResource.remove({id: $scope.case._id}, function()
              {
              });
            };
      */

      });
