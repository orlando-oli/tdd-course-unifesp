import { Money } from '../src/money';

describe('Money', () => {
  it('should properly multiply money', () => {
    const fiveDollars = Money.dollar(5);
    const fiveEuros = Money.euro(5);

    expect(fiveDollars.multiplyBy(2).equals(Money.dollar(10))).toBeTruthy();
    expect(fiveEuros.multiplyBy(3).equals(Money.euro(15))).toBeTruthy();
  });

  it('Money.equals(): should return true if and only if Money compared share the same value property', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.euro(5))).toBeFalsy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  });

  it('should support currency codes', () => {
    expect(Money.dollar(1).code).toEqual('USD');
    expect(Money.euro(1).code).toEqual('EUR');
  });

  it('should add', () => {
    const result = Money.dollar(5).add(Money.dollar(5));

    expect(result.equals(Money.dollar(10))).toBeTruthy();
  });
});
