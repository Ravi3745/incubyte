const { add } = require('./stringCalculator.js');

// 1.test--> for empty string
test('return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

// 2.test--> for string containing single number
test('return number for single number string', () => {
    expect(add("7")).toBe(7);
});

// 3.test--> sum of nummbers in  string seprated by commas ','
test('return sum of two number string', () => {
    expect(add("1,3")).toBe(4);
});