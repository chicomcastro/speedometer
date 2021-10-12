"use strict";
var expect = require("chai").expect;
var Vector3 = require("../dist/src/Vector3.js").default;
describe("Vector3.dot function test", () => {
  it("(1,0,0) dot (1,0,0)", () => {
    const result = Vector3.dot([1, 0, 0], [1, 0, 0]);
    expect(result).to.equal(1);
  });
  it("(1,0,0) dot (0,0,0)", () => {
    const result = Vector3.dot([1, 0, 0], [0, 0, 0]);
    expect(result).to.equal(0);
  });
  it("(1,0,0) dot (0,1,0)", () => {
    const result = Vector3.dot([1, 0, 0], [0, 1, 0]);
    expect(result).to.equal(0);
  });
  it("(1,3,5) dot (2,4,6)", () => {
    const result = Vector3.dot([1, 3, 5], [2, 4, 6]);
    expect(result).to.equal(1 * 2 + 3 * 4 + 5 * 6);
  });
});

describe("Vector3.norm function test", () => {
  it("(1,0,0) norm", () => {
    const result = Vector3.norm([1, 0, 0]);
    expect(result).to.equal(1);
  });
  it("(1,1,0) norm", () => {
    const result = Vector3.norm([1, 1, 0]);
    expect(result).to.equal(Math.sqrt(2));
  });
  it("(1,1,1) norm", () => {
    const result = Vector3.norm([1, 1, 1]);
    expect(result).to.equal(Math.sqrt(3));
  });
  it("(1,2,4) norm", () => {
    const result = Vector3.norm([1, 2, 4]);
    expect(result).to.equal(Math.sqrt(1 * 1 + 2 * 2 + 4 * 4));
  });
});
