const assert = require('assert');
const lib = require('../src/generateCube.js');
const {repeat,
  generateHollowLine} = lib;

describe("repeat", function() {
  it("should repeat character given number of times", function() {
    assert.equal(repeat("*", 1),"*");
    assert.equal(repeat("*", 6),"******");
  });
  it("should return empty string", function() {
    assert.equal(repeat("*", 0),"");
  });
});

describe("generateHollowLine", function() {
  it("should return hollow line with provided number of characters", function() {
    assert.equal(generateHollowLine("*", 1), "*");
    assert.equal(generateHollowLine("*", 4), "*  *");
  });
});
