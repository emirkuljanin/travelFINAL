'use strict';

angular.module('fullstackApp')
  .controller('CasesCtrl', function ($scope , $location, $state , $stateParams, CasesResource) {
    $scope.message = 'Hello';

    $scope.getCases = function functionName() {
              CasesResource.query().$promise.then(function (response) {
            $scope.cases = response;
        });
    };

    $scope.newCase = function(){
        $state.go('cases.new');
    };


        $scope.editCase = function(caseId){
            $state.go('cases.edit', {id: caseId});
        };

    $scope.delete = function(caseId) {
        CasesResource.delete({id : caseId}).$promise.then(function (){
            $scope.getCases();
        });
    };

    $scope.getCases();

         });
