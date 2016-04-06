'use strict';

angular.module('fullstackApp')
.factory('CasesResource', function ($resource) {
    return $resource('/api/cases/:id/', {
        id: '@id'
    },{
        update: {
            method: 'PUT'
        }
    });
});
