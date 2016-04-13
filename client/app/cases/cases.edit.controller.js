'use strict';

angular.module('fullstackApp')
   .controller('CasesEditCtrl', function ($scope , $state,  CasesResource, $stateParams) { 
       $scope.message = 'Hello';

    if($stateParams.id){
        CasesResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.case = response;
        });
    }

    $scope.save = function(){
        if($stateParams.id){
            CasesResource.update({ id: $stateParams.id} , $scope.case).$promise.then(function(response){
                $scope.case = response;
            });
        }else {
            CasesResource.save( $scope.case).$promise.then(function(response){
                $state.go('cases.edit' , { id: response._id} );
                $scope.case = response;
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
