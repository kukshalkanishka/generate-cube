const assert = require('assert');
const lib = require('../src/generateCube.js');
const {repeat,
  generateHollowLine,
  generateSquare} = lib;

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

  it("should return an empty string", function() {
    assert.equal(generateHollowLine("*", 0), "");
  });
});

describe("generate square", function() {
  it("should generate an array with characters repeated similar number of times", function() {
    assert.deepEqual(generateSquare("*",2, [repeat, generateHollowLine]), ["**", "**"]);
    assert.deepEqual(generateSquare("*",4, [repeat, generateHollowLine]), ["****", "*  *", "*  *", "****"]);
  });

  it("should generate a filled square", function() {
    assert.deepEqual(generateSquare("*",2, [repeat, repeat]), ["**", "**"]);
    assert.deepEqual(generateSquare("*",3, [repeat, repeat]), ["***", "***", "***"]);
  });

  it("should return an empty arrray", function() {
    assert.deepEqual(generateSquare("*",0, [repeat, generateHollowLine]), []);
    assert.deepEqual(generateSquare("*",0, [repeat, repeat]), []);
    assert.deepEqual(generateSquare("*",-4, [repeat, generateHollowLine]), []);
  });
});
