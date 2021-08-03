/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
class Money {
  constructor(protected readonly value: number, public readonly code: string) {}

  static dollar(value: number): Dollar {
    return new Dollar(value, 'USD');
  }

  static euro(value: number): Euro {
    return new Euro(value, 'EUR');
  }

  multiplyBy(factor: number): Money {
    return new Money(this.value * factor, this.code);
  }

  equals(anotherCurrency: Money): boolean {
    return this.code === anotherCurrency.code && anotherCurrency.value === this.value;
  }
}

class Euro extends Money {}
class Dollar extends Money {}
export { Money };
