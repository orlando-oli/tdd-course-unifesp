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
}

export { Money };
