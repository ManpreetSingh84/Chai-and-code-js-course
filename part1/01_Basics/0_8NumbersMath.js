let NumOne = 400;
let NumTwo = Math.round(new Number(400.0303).toFixed(2));
// NumTwo.toFixed(2);
// console.log(NumTwo);
let NumThree = 10000000000000;
console.log(NumThree.toLocaleString("en-IN"));
console.log(NumThree.toLocaleString());

// ++++++++++++++++++++++++++++Maths++++++++++++++++++++++
let NumFour = new Number(Math.min(100000000));
let NumFifth = new Number(Math.max(10000));
// console.log(NumFour);
// console.log(NumFifth);

// abs
// turn negative value in positive
let ab = Math.abs(-4);
// console.log(ab); //out is 4
//round
let ro = Math.round(4.6);
let rand = Math.floor(Math.random() * 10 + 1);
// console.log(rand);

let min = 10;
let max = 20;
let cal = Math.floor(Math.random() * (max - min + 1) + min);
console.log(cal);
// floor, round, ceil, Pi , square , power
