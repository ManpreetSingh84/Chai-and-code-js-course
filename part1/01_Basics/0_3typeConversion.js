let num = 100200300;
console.log(typeof num);

let strToNUm = "100";
console.log(strToNUm);
let convertTONum = Number(strToNUm);
console.table([typeof convertTONum, convertTONum, typeof convertTONum]);

let numToBollen = 10;
let covertSecond = Boolean(numToBollen);
console.table([typeof numToBollen, numToBollen, typeof covertSecond]);

// try to understand point
//if you are convert number + string to number and check there typeof then they will show number but there value is Nan

//example 1
let focusPoint = "33abc";
let convertThird = Number(focusPoint);
console.table([
  focusPoint,
  typeof focusPoint,
  typeof convertThird,
  convertThird,
]);

//example 2
let focusPoint2 = null;
let convertfourth = Number(focusPoint2);
console.table([
  focusPoint2,
  typeof focusPoint2,
  typeof convertfourth,
  convertfourth,
]);

//points

// "33"=> 33
// "33abc"=> NaN
// true => 1
// false => 0
// null =>0
//"" bolean => false
