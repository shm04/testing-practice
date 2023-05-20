import capitalize from './capitalize.js'

describe('capitalize', () => {
    it('capitalizes the first character of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('openAI')).toBe('OpenAI');
      expect(capitalize('javascript')).toBe('Javascript');
    });
  
    it('returns an empty string if the input is empty', () => {
      expect(capitalize('')).toBe('');
    });
  });