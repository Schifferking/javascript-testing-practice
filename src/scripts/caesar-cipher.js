const createNumbersArray = (num = 26) => {
  return Array.from({ length: num }, (_, i) => i);
};

const createAlphabetArray = (code = 97) => {
  const alpha = Array.from(Array(26)).map((e, i) => i + code);
  return alpha.map((x) => String.fromCharCode(x));
};

const lowercaseLetterToNumber = () => {
  const alphabet = createAlphabetArray();
  const numbers = createNumbersArray();
  const result = {};
  alphabet.forEach((letter, i) => (result[letter] = numbers[i]));
  return result;
};

const uppercaseLetterToNumber = () => {
  const alphabet = createAlphabetArray(65);
  const numbers = createNumbersArray();
  const result = {};
  alphabet.forEach((letter, i) => (result[letter] = numbers[i]));
  return result;
};

const numberToLowercaseLetter = () => {
  const alphabet = createAlphabetArray();
  const numbers = createNumbersArray();
  const result = {};
  numbers.forEach((num, i) => (result[num] = alphabet[i]));
  return result;
};

const numberToUppercaseLetter = () => {
  const alphabet = createAlphabetArray(65);
  const numbers = createNumbersArray();
  const result = {};
  numbers.forEach((num, i) => (result[num] = alphabet[i]));
  return result;
};

const encryptionFunction = (letterNum, shiftFactor) => {
  return (letterNum + shiftFactor) % 26;
};

const calculateCipherNumber = (letterNumDict, letter, shiftFactor) => {
  return encryptionFunction(letterNumDict[letter], shiftFactor).toString();
};

const isUppercase = (letter) => {
  return /[A-Z]/.test(letter);
};

const isLowercase = (letter) => {
  return /[a-z]/.test(letter);
};

const cipherLetter = (params) => {
  const numToUppercaseLetter = params.numUppercase;
  const numToLowercaseLetter = params.numLowercase;
  const uppercaseLetterToNum = params.uppercaseNum;
  const lowercaseLetterToNum = params.lowercaseNum;
  const character = params.character;
  const shiftFactor = params.shiftFactor;
  if (isUppercase(character)) {
    return numToUppercaseLetter[
      calculateCipherNumber(uppercaseLetterToNum, character, shiftFactor)
    ];
  } else if (isLowercase(character)) {
    return numToLowercaseLetter[
      calculateCipherNumber(lowercaseLetterToNum, character, shiftFactor)
    ];
  } else {
    return character;
  }
};

const getDictionaries = () => {
  return {
    numUppercase: numberToUppercaseLetter(),
    numLowercase: numberToLowercaseLetter(),
    uppercaseNum: uppercaseLetterToNumber(),
    lowercaseNum: lowercaseLetterToNumber(),
  };
};

const caesarCipher = (text, shiftFactor) => {
  let dictionaries = getDictionaries();
  let textArray = [...text];
  let textCiphered = "";
  textArray.forEach((character) => {
    textCiphered += cipherLetter(
      Object.assign(dictionaries, {
        character: character,
        shiftFactor: shiftFactor,
      })
    );
  });
  return textCiphered;
};

module.exports = caesarCipher;
