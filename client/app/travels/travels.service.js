'use strict';

angular.module('fullstackApp')
.factory('CasesResource', function ($resource) {
    return $resource('/api/travels/:id/', {
        id: '@id'
    },{
        update: {
            method: 'PUT'
        }
    });
});
