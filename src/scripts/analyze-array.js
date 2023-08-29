const getArraySum = (numsArray) => {
  return numsArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const getAverage = (numsArray) => {
  return getArraySum(numsArray) / numsArray.length;
};

const getMin = (numsArray) => {
  return Math.min(...numsArray);
};

const getMax = (numsArray) => {
  return Math.max(...numsArray);
};

const analyzeArray = (numsArray) => {
  return {
    average: getAverage(numsArray),
    min: getMin(numsArray),
    max: getMax(numsArray),
    length: numsArray.length,
  };
};

module.exports = analyzeArray;
