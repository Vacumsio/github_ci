const mult = require('./mult');

test('Should multiply a and b and return multiply', () => {
  expect(mult(5, 10)).toBe(50);
});
