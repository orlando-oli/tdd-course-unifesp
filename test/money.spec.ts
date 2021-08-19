import { Bank } from '../src/bank';
import { Money } from '../src/money';

describe('Money', () => {
  const bank = new Bank();

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
    const five = Money.dollar(5);
    const exp = five.add(five);

    expect(bank.fetch(exp, 'USD')).toBeTruthy();
  });

  it('should return an addition', () => {
    const five = Money.dollar(5);
    const exp = five.add(five);

    expect(exp.addend).toEqual(Money.dollar(5));
    expect(exp.augend).toEqual(Money.dollar(5));
  });

  it('should fetch itself', () => {
    const five = Money.dollar(5);

    expect(bank.fetch(five, 'USD')).toEqual(Money.dollar(5));
  });

  it('should convert different currencies, according to their conversion rate', () => {
    bank.setRate('EUR', 'USD', 2);

    expect(bank.fetch(Money.euro(2), 'USD')).toEqual(Money.dollar(1));
  });

  it("should return 1 if it's not trying to convert", () => {
    expect(bank.getRate('USD', 'USD')).toEqual(1);
  });
});
