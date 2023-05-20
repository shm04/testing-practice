import reverseString from './reverseString';

describe('reverseString', () => {
  it('reverses the string', () => {
    expect(reverseString('')).toBe('');
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('OpenAI')).toBe('IAnepO');
    expect(reverseString('12345')).toBe('54321');
  });
});
