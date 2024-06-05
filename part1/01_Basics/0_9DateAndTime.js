// console.log(Date());
let MyDate = new Date();
// console.log(MyDate.toString);
// console.log(MyDate.toDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleDateString());

// type of date is object
// jan is 0
// date (2023,0,1)
let selfdate = new Date(2000, 6, 6);
console.log(selfdate.toDateString());

let selfdate2 = new Date("06-07-2000");
console.log(selfdate2.toDateString());
console.log(selfdate.getTime());

// second mai nikal ne kai leye

console.log(Math.floor(selfdate.getTime() / 1000));
console.log(selfdate.getMonth() + 1);
