'use strict';

angular.module('fullstackApp')
  .controller('CasesCtrl', function ($scope , $state , $stateParams, CasesResource) {
    $scope.message = 'Hello';

    CasesResource.query().$promise.then(function (response) {
        $scope.cases = response;
    });

    $scope.newCase = function(){
        $state.go('cases.new');
    };


        $scope.editCase = function(caseId){
            $state.go('cases.edit', {id: caseId});
        };

      });
