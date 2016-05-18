'use strict';

angular.module('fullstackApp')
  .controller('DocumentsEditCtrl', function ($scope , $state, DocumentsResource, $stateParams) {
    $scope.message = 'Hello';

    if($stateParams.id){
        DocumentsResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.document = response;
        });
    }

    $scope.save = function(){
      $scope.document.travel = $stateParams.travelId;
      if($stateParams.id){
          DocumentsResource.update({ id: $stateParams.id} , $scope.document).$promise.then(function(response){
              $scope.document = response;
          });
      }else {
          DocumentsResource.save( $scope.document).$promise.then(function(response){
              $state.go('documents.edit' , { id: response._id} );
              $scope.document = response;
          });
      }
    };
  });
