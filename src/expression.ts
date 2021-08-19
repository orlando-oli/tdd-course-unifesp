/* eslint-disable import/no-cycle */
import { Bank } from './bank';
import { Money } from './money';

interface Expression {
  fetch: (source: Bank, targetCurrency: string) => Money;
}

export { Expression };
