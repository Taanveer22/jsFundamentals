var applePrice = 20;
 var orangePrice = 20;
// var orangePrice = '30';
var total = orangePrice + applePrice;
// console.log(typeof orangePrice, typeof total);
// if we add number and string then string always get the priority


var carPrice = parseInt(44.44);
// integer cut the numbers which are given after floating point
var bikePrice = parseFloat(22.22);
// float show the numbers which are given after floating point
console.log(carPrice, bikePrice);


var first = 0.1;
var second = 0.2;
var sum = first+ second;
console.log(sum);
console.log(sum.toFixed(3));
console.log(sum.toFixed(5));
// toFixed() returns as string not number

const num1 = 50/0;
console.log(num1);
// something positive divided by zero retuns infinity

const num2 = -50/0;
console.log(num2);
// something negative divided by zero retuns -infinity

