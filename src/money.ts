class Money {
  constructor(protected readonly value: number) {}

  multiplyBy(factor: number): Money {
    return new Money(this.value * factor);
  }

  equals(anotherCurrency: Money): boolean {
    if (this.constructor !== anotherCurrency.constructor) return false;
    return anotherCurrency.value === this.value;
  }
}

export { Money };
