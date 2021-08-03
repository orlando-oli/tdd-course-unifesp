/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
abstract class Money {
  constructor(protected readonly value: number, public readonly code: string) {}

  static dollar(value: number): Dollar {
    return new Dollar(value, 'USD');
  }

  static euro(value: number): Euro {
    return new Euro(value, 'EUR');
  }

  abstract multiplyBy(factor: number): Money;

  equals(anotherCurrency: Money): boolean {
    return this.code === anotherCurrency.code && anotherCurrency.value === this.value;
  }
}

class Euro extends Money {
  multiplyBy(factor: number): Money {
    return new Euro(this.value * factor, this.code);
  }
}
class Dollar extends Money {
  multiplyBy(factor: number): Money {
    return new Dollar(this.value * factor, this.code);
  }
}
export { Money };
