  'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('travels', {
        url: '/travel',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('travels.list', {
        url: '',
        controller: 'TravelsCtrl',
        templateUrl: 'app/travels/travels.html'
      })
      .state('travels.new', {
        url: '/new',
        controller: 'TravelsEditCtrl',
        templateUrl: 'app/travels/travelsEdit.html'
      }).state('travels.edit', {
            url: '/:id/edit',
            controller: 'TravelsEditCtrl',
            templateUrl: 'app/travels/travelsEdit.html'
        })
        .state('travels.addDoc', {
        url: '/:travelId/add-document',
        controller: 'DocumentEditCtrl',
        templateUrl: 'app/document/documentedit.html'
    });

      });
