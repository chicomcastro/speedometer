"use strict";
var expect = require("chai").expect;
var MathUtils = require("../dist/src/MathUtils.js").default;
describe("MathUtils.round function test", () => {
  it("1.152", () => {
    const result = MathUtils.round(1.512);
    expect(result).to.equal(1.51);
  });
  it("1.156", () => {
    const result = MathUtils.round(1.516);
    expect(result).to.equal(1.52);
  });
  it("0", () => {
    const result = MathUtils.round(0);
    expect(result).to.equal(0);
  });
  it("null", () => {
    const result = MathUtils.round(null);
    expect(result).to.equal(0);
  });
  it("undefined", () => {
    const result = MathUtils.round();
    expect(result).to.equal(0);
  });
});

describe("MathUtils.arraySum function test", () => {
  it("[1,1,1] sum", () => {
    const result = MathUtils.arraySum([1, 1, 1]);
    expect(result).to.equal(3);
  });
  it("[0] sum", () => {
    const result = MathUtils.arraySum([0]);
    expect(result).to.equal(0);
  });
  it("[0, 1] sum", () => {
    const result = MathUtils.arraySum([0, 1]);
    expect(result).to.equal(1);
  });
});

describe("MathUtils.arrayMean function test", () => {
  it("[1,1,1] sum", () => {
    const result = MathUtils.arrayMean([1, 1, 1]);
    expect(result).to.equal(1);
  });
  it("[0] sum", () => {
    const result = MathUtils.arrayMean([0]);
    expect(result).to.equal(0);
  });
  it("[0, 1] sum", () => {
    const result = MathUtils.arrayMean([0, 1]);
    expect(result).to.equal(0.5);
  });
});

describe("MathUtils.derivate function test", () => {
  it("[1,1,1] derivative", () => {
    const result = MathUtils.derivate([1, 1, 1], 1);
    const expected = [0, 0];
    result.forEach((r, index) => expect(r).to.equal(expected[index]));
  });
  it("[0] derivative", () => {
    const result = MathUtils.derivate([0], 1);
    const expected = [0];
    result.forEach((r, index) => expect(r).to.equal(expected[index]));
  });
  it("[0, 1] derivative", () => {
    const result = MathUtils.derivate([0, 1], 1);
    const expected = [1];
    result.forEach((r, index) => expect(r).to.equal(expected[index]));
  });
});

describe("MathUtils.integrate function test", () => {
  it("[1,1,1] integration", () => {
    const result = MathUtils.integrate([1, 1, 1], 1);
    const expected = [1, 1];
    result.forEach((r, index) => expect(r).to.equal(expected[index]));
  });
  it("[0] integration", () => {
    const result = MathUtils.integrate([0], 1);
    const expected = [0];
    result.forEach((r, index) => expect(r).to.equal(expected[index]));
  });
  it("[0, 1] integration", () => {
    const result = MathUtils.integrate([0, 1], 1);
    const expected = [0.5];
    result.forEach((r, index) => expect(r).to.equal(expected[index]));
  });
  it("[0, 1, 1] integration", () => {
    const result = MathUtils.integrate([0, 1, 1], 0.5);
    const expected = [0.25, 0.5];
    result.forEach((r, index) => expect(r).to.equal(expected[index]));
  });
});
