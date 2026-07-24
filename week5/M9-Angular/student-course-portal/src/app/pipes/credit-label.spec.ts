import { CreditLabel } from './credit-label';

describe('CreditLabel', () => {
  let pipe: CreditLabel;

  beforeEach(() => {
    pipe = new CreditLabel();
  });

  it('should return "No Credits" for 0, null, or undefined', () => {
    expect(pipe.transform(0)).toBe('No Credits');
    expect(pipe.transform(null)).toBe('No Credits');
    expect(pipe.transform(undefined)).toBe('No Credits');
  });

  it('should return singular "1 Credit" for value 1', () => {
    expect(pipe.transform(1)).toBe('1 Credit');
  });

  it('should return plural "X Credits" for values > 1', () => {
    expect(pipe.transform(4)).toBe('4 Credits');
  });
});
