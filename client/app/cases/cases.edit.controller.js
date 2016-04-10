'use strict';

angular.module('fullstackApp')
  .controller('CasesEditCtrl', function ($scope , CasesResource, $stateParams, $location) {
    $scope.message = 'Hello';

    if($stateParams.id){
        CasesResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.case = response;
        });
    }

    $scope.save = function(){
        CasesResource.save($scope.case).$promise.then(function(response){
            console.log(response);
            $scope.case = response;
        });
      };

      $scope.update = function() {
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


});
