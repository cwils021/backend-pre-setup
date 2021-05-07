import { add, multiply } from '@src/math/math';

describe('This is a math.spec.ts test inside the math folder', () => {
  it('this should pass', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('this should fail, but pass after refacter', () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
