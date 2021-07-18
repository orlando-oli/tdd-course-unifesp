export class Dollar {
  constructor(public value: number) {}

  multiplyBy(factor: number): void {
    this.value *= factor;
  }
}
