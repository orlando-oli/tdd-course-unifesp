import { Dollar } from '../src/dollar';

describe('Dollar', () => {
  it('should multiply properly', () => {
    const fiveDollars = new Dollar(5);

    fiveDollars.multiplyBy(2);
    expect(fiveDollars.value).toEqual(10);
  });
});
