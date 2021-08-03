class Money {
  constructor(protected readonly value: number) {}

  multiplyBy(factor: number): Money {
    return new Money(this.value * factor);
  }

  equals(anotherCurrency: Money): boolean {
    return this.constructor === anotherCurrency.constructor && anotherCurrency.value === this.value;
  }
}

export { Money };
