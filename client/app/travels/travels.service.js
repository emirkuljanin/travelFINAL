'use strict';

angular.module('fullstackApp')
.factory('TravelsResource', function ($resource) {
    return $resource('/api/travels/:id/', {
        id: '@id'
    },{
        update: {
            method: 'PUT'
        }
    });
});
