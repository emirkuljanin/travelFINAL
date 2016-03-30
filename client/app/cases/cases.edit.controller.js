'use strict';

angular.module('fullstackApp')
  .controller('CasesEditCtrl', function ($scope , CasesResource) {
    $scope.message = 'Hello';

    $scope.save = function(){
        CasesResource.save($scope.case).$promise.then(function(response){
            console.log(response);
            $scope.case = response;
        });
      }
        $scope.save = function(){
            CasesResource.save($scope.case).$promise.then(function(response){
                $scope.case = response;
            });
        };
      });
