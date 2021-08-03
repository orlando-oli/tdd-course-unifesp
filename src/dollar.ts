export class Dollar {
  constructor(private readonly value: number) {}

  multiplyBy(factor: number): Dollar {
    return new Dollar(this.value * factor);
  }

  equals(anotherDollar: Dollar): boolean {
    return anotherDollar.value === this.value;
  }
}
