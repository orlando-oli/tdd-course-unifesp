/* eslint-disable import/no-cycle */
import { Expression } from './expression';
import { Money } from './money';

class Addition implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  fetch(targetCurrency: string): Money {
    return new Money(this.augend.getValue() + this.addend.getValue(), targetCurrency);
  }
}

export { Addition };
