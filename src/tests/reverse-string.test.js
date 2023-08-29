const reverseString = require("./../scripts/reverse-string");

test("reverseString returns a reversed string", () => {
  expect(reverseString("bar")).toMatch("rab");
});
