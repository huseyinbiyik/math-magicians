import operate from '../logic/operate';

describe('test all the math operation functions', () => {
  test('4 + 2 must be equal to 6', () => {
    expect(operate(4, 2, '+')).toBe('6');
  });
});
