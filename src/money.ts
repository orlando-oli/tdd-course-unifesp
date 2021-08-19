/* eslint-disable import/no-cycle */
import { Addition } from './addition';
import { Bank } from './bank';

class Money {
  constructor(protected readonly value: number, public readonly code: string) {}

  static dollar(value: number): Money {
    return new Money(value, 'USD');
  }

  static euro(value: number): Money {
    return new Money(value, 'EUR');
  }

  multiplyBy(factor: number): Money {
    return new Money(this.value * factor, this.code);
  }

  equals(anotherCurrency: Money): boolean {
    return this.code === anotherCurrency.code && anotherCurrency.value === this.value;
  }

  add(term: Money): Addition {
    return new Addition(this, term);
  }

  getValue(): number {
    return this.value;
  }

  fetch(bank: Bank, targetCurrency: string): Money {
    return new Money(this.value / bank.getRate(this.code, targetCurrency), targetCurrency);
  }
}

export { Money };
