const calculator = require("./../scripts/calculator");

test("function returns a calculator object", () => {
  let myCalculator = calculator();
  expect(myCalculator).toEqual({
    add: expect.any(Function),
    subtract: expect.any(Function),
    multiply: expect.any(Function),
    divide: expect.any(Function),
  });
});

test("calculator add function 2 + 2 returns 4", () => {
  let myCalculator = calculator();
  expect(myCalculator.add(2, 2)).toBe(4);
});

test("calculator add function 3 + 4 returns 7", () => {
  let myCalculator = calculator();
  expect(myCalculator.add(3, 4)).toBe(7);
});

test("calculator subtract function 2 - 2 returns 0", () => {
  let myCalculator = calculator();
  expect(myCalculator.subtract(2, 2)).toBe(0);
});

test("calculator subtract function 3 - 4 returns -1", () => {
  let myCalculator = calculator();
  expect(myCalculator.subtract(3, 4)).toBe(-1);
});

test("calculator multiply function 2 x 2 returns 4", () => {
  let myCalculator = calculator();
  expect(myCalculator.multiply(2, 2)).toBe(4);
});

test("calculator multiply function 3 x 4 returns 12", () => {
  let myCalculator = calculator();
  expect(myCalculator.multiply(3, 4)).toBe(12);
});

test("calculator divide function 2 ÷ 2 returns 1", () => {
  let myCalculator = calculator();
  expect(myCalculator.divide(2, 2)).toBe(1);
});

test("calculator divide function 3 ÷ 4 returns 0.75", () => {
  let myCalculator = calculator();
  expect(myCalculator.divide(3, 4)).toBeCloseTo(0.75);
});
