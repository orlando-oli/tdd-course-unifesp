import { Money } from './money';

class Euro extends Money {
  multiplyBy(factor: number): Euro {
    return new Euro(this.value * factor);
  }
}

export { Euro };
