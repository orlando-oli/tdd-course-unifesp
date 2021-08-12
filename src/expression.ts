// eslint-disable-next-line import/no-cycle
import { Money } from './money';

interface Expression {
  fetch: (targetCurrency: string) => Money;
}

export { Expression };
