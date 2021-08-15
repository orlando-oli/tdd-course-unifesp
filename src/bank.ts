import { Addition } from './addition';
import { Expression } from './expression';
import { Money } from './money';

class Bank {
  static fetch(source: Expression, target: string): Money {
    if (source.constructor === Money) {
      return (source as Money).fetch(target);
    }

    return (source as Addition).fetch(target);
  }
}

export { Bank };
