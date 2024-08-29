// 1st problem
var givenMoney = 1000;
var costMoney = 700;
var remainMoney = givenMoney -costMoney;
console.log(remainMoney);

// 2nd problem
var fiveSubMarks = (75.25 + 65 + 80 + 35.45 + 99.50);
console.log(fiveSubMarks);
var avgMarks = (fiveSubMarks / 5);
console.log(avgMarks.toFixed(2));

// 3rd problem
var givenNumber = 119;
var dividedNumber = 5;
var remainderNumber = (119 % 5);
console.log(remainderNumber);

// 4th problem
const a = isNaN('11');
console.log(a); 
// returns false

const b = isNaN(2-10);
console.log(b);
// returns false

const c = isNaN(3);
console.log(c);
// retuns false

const d = isNaN('js');
console.log(d);
// returns true