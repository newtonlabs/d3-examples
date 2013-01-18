'use strict';

describe('Service: EnterUpdateExit', function () {

  // load the service's module
  beforeEach(module('animationsApp'));

  // instantiate service
  var EnterUpdateExit;
  beforeEach(inject(function(_EnterUpdateExit_) {
    EnterUpdateExit = _EnterUpdateExit_;
  }));

  it('should do something', function () {
    expect(!!EnterUpdateExit).toBe(true);
  });

});
