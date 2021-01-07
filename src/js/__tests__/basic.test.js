import counting from '../basic';

test('health more 50', () => {
  const a = {
    health: 90,
  };
  const result = counting(a);
  expect(result).toBe('healthy');
});

test('health  50', () => {
  const a = {
    health: 50,
  };
  const result = counting(a);
  expect(result).toBe('wounded');
});

test('health  more 15 and less 50', () => {
  const a = {
    health: 30,
  };
  const result = counting(a);
  expect(result).toBe('wounded');
});

test('health  15', () => {
  const a = {
    health: 15,
  };
  const result = counting(a);
  expect(result).toBe('wounded');
});

test('health less 15', () => {
  const a = {
    health: 5,
  };
  const result = counting(a);
  expect(result).toBe('critical');
});

test('over', () => {
  const a = {
    health: -5,
  };
  const result = counting(a);
  expect(result).toBe('you are already dead');
});
