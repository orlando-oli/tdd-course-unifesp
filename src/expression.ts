/* eslint-disable import/no-cycle */
import { Bank } from './bank';
import { Money } from './money';

interface Expression {
  fetch: (bank: Bank, targetCurrency: string) => Money;
  multiplyBy: (factor: number) => Expression;
}

export { Expression };
