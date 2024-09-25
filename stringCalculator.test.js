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

// 4.test--> handle new lines between numbers
test('return sum with new lines between numbers', () =>{
    expect(add("1\n2,3")).toBe(6);
});

// 5.test--> custom Delimiters
test('supports custom Delimiters', () =>{
    expect(add("//;\n1;2")).toBe(3);
});

// 6. handle negative numbers
test('throws an error for negative numbers', () =>{
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
})