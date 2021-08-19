/* eslint-disable import/no-cycle */
import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';

class Addition implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  fetch(bank: Bank, targetCurrency: string): Money {
    return new Money(
      this.augend.getValue() + this.addend.fetch(bank, targetCurrency).getValue(),
      targetCurrency,
    );
  }
}

export { Addition };
