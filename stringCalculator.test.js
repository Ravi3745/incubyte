const { add } = require('./stringCalculator.js');

// 1.test for empty string
test('return 0 for an empty string', ()=> {
    expect(add("")).toBe(0);
});