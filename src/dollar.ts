import { Money } from './money';

class Dollar extends Money {
  multiplyBy(factor: number): Dollar {
    return new Dollar(this.value * factor);
  }
}

export { Dollar };
