'use strict';

describe('Controller: CasesCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var CasesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CasesCtrl = $controller('CasesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
