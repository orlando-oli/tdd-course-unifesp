/* eslint-disable import/no-cycle */
import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';

class Addition implements Expression {
  constructor(public augend: Expression, public addend: Expression) {}

  fetch(bank: Bank, targetCurrency: string): Money {
    const ret =
      this.augend.fetch(bank, targetCurrency).getValue() +
      this.addend.fetch(bank, targetCurrency).getValue();

    return new Money(ret, targetCurrency);
  }

  add(addend: Expression): Expression {
    return new Addition(this, addend);
  }

  multiplyBy(factor: number): Expression {
    return new Addition(this.augend.multiplyBy(factor), this.addend.multiplyBy(factor));
  }
}

export { Addition };
