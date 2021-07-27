export class Dollar {
  constructor(public value: number) {}

  multiplyBy(factor: number): Dollar {
    return new Dollar(this.value * factor);
  }
}
