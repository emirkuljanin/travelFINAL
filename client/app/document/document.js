'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documents', {
        url: '/documents',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('documents.list', {
        url: '',
        controller: 'DocumentsCtrl',
        templateUrl: 'app/document/document.html'
      })
      .state('documents.new', {
        url: '/new',
        controller: 'DocumentsEditCtrl',
        templateUrl: 'app/document/documentedit.html'
    }).state('documents.edit', {
      url: '/:id',
      controller: 'DocumentsEditCtrl',
      templateUrl: 'app/document/documentedit.html'
  });

  });
