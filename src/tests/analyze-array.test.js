const analyzeArray = require("./../scripts/analyze-array");

test("analyzeArray returns an object with average, min, max and length properties", () => {
  let myAnalyzeArray = analyzeArray([1, 2, 3, 4]);
  expect(myAnalyzeArray).toEqual({
    average: expect.any(Number),
    min: expect.any(Number),
    max: expect.any(Number),
    length: expect.any(Number),
  });
});

test("analizeArray with [1, 2, 3, 4] should return 2.5 as average value", () => {
  let myAnalyzeArray = analyzeArray([1, 2, 3, 4]);
  expect(myAnalyzeArray.average).toBeCloseTo(2.5);
});

test("analizeArray with [1, 2, 3, 4] should return 1 as min value", () => {
  let myAnalyzeArray = analyzeArray([1, 2, 3, 4]);
  expect(myAnalyzeArray.min).toBe(1);
});

test("analizeArray with [1, 2, 3, 4] should return 4 as max value", () => {
  let myAnalyzeArray = analyzeArray([1, 2, 3, 4]);
  expect(myAnalyzeArray.max).toBe(4);
});

test("analizeArray with [1, 2, 3, 4] should return 4 as length value", () => {
  let myAnalyzeArray = analyzeArray([1, 2, 3, 4]);
  expect(myAnalyzeArray.length).toBe(4);
});

test("analizeArray with [1, 2, 3, 4, 5] should return 5 as length value", () => {
  let myAnalyzeArray = analyzeArray([1, 2, 3, 4, 5]);
  expect(myAnalyzeArray.length).toBe(5);
});
