'use strict';

angular.module('fullstackApp')
  .controller('CasesEditCtrl', function ($scope , CasesResource, $stateParams) {
    $scope.message = 'Hello';

    if($stateParams.id){
        CasesResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.case = response;
        });
    }

        $scope.save = function(){
            CasesResource.save($scope.case).$promise.then(function(response){
                $scope.case = response;
            });
        };
      })
      .controller('CasesUpdateCtrl', function ($scope ,$state, CasesResource, $stateParams) {

        $scope.edit = function(){
          CasesResource.update($scope.case).$promise.then(function(response){
              $scope.case = response;
          });
        }
        });
