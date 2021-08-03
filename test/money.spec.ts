import { Dollar } from '../src/dollar';
import { Euro } from '../src/euro';

describe('Money', () => {
  it('should properly multiply dollars', () => {
    const fiveDollars = new Dollar(5);

    expect(fiveDollars.multiplyBy(2).equals(new Dollar(10))).toBeTruthy();
    expect(fiveDollars.multiplyBy(3).equals(new Dollar(15))).toBeTruthy();
  });
  it('should properly multiply euros', () => {
    const fiveEuros = new Euro(5);

    expect(fiveEuros.multiplyBy(2).equals(new Euro(10))).toBeTruthy();
    expect(fiveEuros.multiplyBy(3).equals(new Euro(15))).toBeTruthy();
  });

  it('Money.equals(): should return true if and only if Money compared share the same value property', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Euro(5).equals(new Euro(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    expect(new Euro(5).equals(new Euro(6))).toBeFalsy();
    expect(new Euro(5).equals(new Dollar(5))).toBeFalsy();
  });
});
