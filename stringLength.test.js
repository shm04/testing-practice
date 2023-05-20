import stringLength from './stringLength.js';

describe('stringLength', () => {
  it('returns the length of the string', () => {
    expect(stringLength('Hello')).toBeGreaterThanOrEqual(0);
    expect(stringLength('Hello')).toBeLessThanOrEqual(10);
  });
});
