const capitalize = require("./../scripts/capitalize");

test("capitalize function returns string capitalized", () => {
  expect(capitalize("foo")).toMatch("Foo");
});
