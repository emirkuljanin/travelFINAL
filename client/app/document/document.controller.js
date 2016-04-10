'use strict';

angular.module('fullstackApp')
  .controller('DocumentsCtrl', function ($scope, $state, $stateParams ,DocumentsResource) {
      //This is how we are getting data from resource,
      // you need to execute query method on resource to get list of all data
    DocumentsResource.query().$promise.then(function (response) {
        $scope.documents = response;
    });

    $scope.newDocument = function() {
        $state.go('documents.new');
    };

    $scope.editDocument = function(documentId) {
        $state.go('documents.edit', {id: documentId});
    };

  });
