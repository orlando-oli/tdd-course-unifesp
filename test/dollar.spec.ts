import { Dollar } from '../src/dollar';

describe('Dollar', () => {
  it('should multiply properly', () => {
    const fiveDollars = new Dollar(5);

    let result = fiveDollars.multiplyBy(2);
    expect(result.value).toEqual(10);

    result = fiveDollars.multiplyBy(3);
    expect(result.value).toEqual(15);
  });

  it('Dollar.equals(): should return true if and only if dollars compared share the same value property', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
