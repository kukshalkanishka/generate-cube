const assert = require('assert');
const lib = require('../src/generateCube.js');
const {repeat} = lib;

describe("repeat", function() {
  it("should repeat character given number of times", function() {
    assert.equal(repeat("*", 1),"*");
    assert.equal(repeat("*", 6),"******");
  });
});
