import { Dollar } from '../src/dollar';

describe('Dollar', () => {
  it('should multiply properly', () => {
    const fiveDollars = new Dollar(5);

    expect(fiveDollars.multiplyBy(2).equals(new Dollar(10))).toBeTruthy();
    expect(fiveDollars.multiplyBy(3).equals(new Dollar(15))).toBeTruthy();
  });

  it('Dollar.equals(): should return true if and only if dollars compared share the same value property', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
