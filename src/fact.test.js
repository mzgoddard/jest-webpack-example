const fact = require('./fact');

it('fact(1) == 1', () => {
  expect(fact(1)).toBe(1);
});

it('fact(2) == 3', () => {
  expect(fact(2)).toBe(3);
});

it('fact(3) == 6', () => {
  expect(fact(3)).toBe(6);
});

it('fact(4) == 10', () => {
  expect(fact(4)).toBe(10);
});

it('fact(5) == 15', () => {
  expect(fact(5)).toBe(15);
});
