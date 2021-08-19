/* eslint-disable import/no-cycle */
import { Expression } from './expression';
import { Money } from './money';

interface Rate {
  [keys: string]: number;
}

const parseCurrency = (source: string, target: string): string => `${source}-${target}`;

class Bank {
  private rate: Rate = {} as Rate;

  fetch(source: Expression, target: string): Money {
    return source.fetch(this, target);
  }

  setRate(source: string, target: string, rate: number): void {
    this.rate[parseCurrency(source, target)] = rate;
    this.rate[parseCurrency(target, source)] = rate;
  }

  getRate(source: string, target: string): number {
    if (source === target) return 1;

    return this.rate[parseCurrency(source, target)];
  }
}

export { Bank };
