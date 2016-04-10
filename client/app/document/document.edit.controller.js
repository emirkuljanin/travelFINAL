'use strict';

angular.module('fullstackApp')
  .controller('DocumentsEditCtrl', function ($scope , DocumentsResource, $stateParams) {
    $scope.message = 'Hello';

    if($stateParams.id){
        DocumentsResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.document = response;
        });
    }

    $scope.save = function(){
        DocumentsResource.save($scope.document).$promise.then(function(response){
            console.log(response);
            $scope.document = response;
        });
      }
  });
