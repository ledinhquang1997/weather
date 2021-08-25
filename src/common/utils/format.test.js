import { round, getDay } from './format';

describe('format utils', () => {
  test('round correctly', () => {
    const num = 2.22222;
    const roundedNum = round(num);
    expect(roundedNum).toBe(2);
  });

  test('return correct day', () => {
    const date = '2021-08-24';
    const day = getDay(date);
    expect(day).toBe('Tuesday');
  });
});
