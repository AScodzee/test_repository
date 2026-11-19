const test = require("node:test");
const assert = require("node:assert");
const { add, divide } = require("../src/calc.js");

test("adds two numbers", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("divides two numbers", () => {
  assert.strictEqual(divide(10, 2), 5);
});
