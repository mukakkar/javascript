'use strict';

const calcTip = (amount) =>
  amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];

console.log(bills, tips, totals);
