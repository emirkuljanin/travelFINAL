'use strict';

angular.module('fullstackApp')
  .controller('DocumentsCtrl', function ($scope, $state, $stateParams ,DocumentsResource) {
      //This is how we are getting data from resource,
      // you need to execute query method on resource to get list of all data

    $scope.getDocuments = function functionName() {
              DocumentsResource.query().$promise.then(function (response) {
            $scope.documents = response;
        });
    };

    $scope.newDocument = function() {
        $state.go('documents.new');
    };

    $scope.editDocument = function(docId) {
        $state.go('documents.edit', {id: docId});
    };

    $scope.delete = function(docId) {
        DocumentsResource.delete({id : docId}).$promise.then(function (){
            $scope.getDocuments();
        });
    };

    $scope.getDocuments();

         });
