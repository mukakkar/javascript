'use strict';

const forecast = [12, 5, -5, 0, 4];

const printForecast = (array) => {
  let str = 'The temprature would be';
  for (let index = 0; index < array.length; index++) {
    str += ` ${array[index]} in ${index + 1} days ...`;
  }
  console.log(str);
};

printForecast(forecast);
