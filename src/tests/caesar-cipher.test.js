const caesarCipher = require("./../scripts/caesar-cipher");

test('Caesar cipher of "hello" with shift factor "1" returns "ifmmp"', () => {
  expect(caesarCipher("hello", 1)).toMatch("ifmmp");
});

test('Caesar cipher of "zebra" with shift factor "2" returns "bgdtc"', () => {
  expect(caesarCipher("zebra", 2)).toMatch("bgdtc");
});

test('Caesar cipher of "Foo" with shift factor "3" returns "Irr"', () => {
  expect(caesarCipher("Foo", 3)).toMatch("Irr");
});

test('Caesar cipher of "Hello world!" with shift factor "4" returns "Lipps asvph!"', () => {
  expect(caesarCipher("Hello world!", 4)).toMatch("Lipps asvph!");
});
