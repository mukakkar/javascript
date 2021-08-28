'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = (amount) =>
  amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;
const calcAverage = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
  console.log(`Bill ${bills[i]}, tip ${tips[i]}, total ${totals[i]}`);
}

console.log(`The average bill amount is ${calcAverage(totals)}`);
