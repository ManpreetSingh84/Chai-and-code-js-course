//infinte argument and infinte parameter kai lete rest operator use hota hai

let rest = (...num) => {
  return num;
};
console.log(rest(10, 20, 30, 40, 50));

//spread
let heros = [
  "Avengers",
  "shaktiman",
  "spiderman",
  "bheem",
  "ninja hathori",
  "mighty raju",
  "thor",
  "iron man",
];
let dc = ["Batman", "tmkoc", "flash"];
let singer = ["Honey Singh", "Badshah", "alfaz"];
console.log(...heros, ...dc, ...singer);
const lm = heros.concat(dc, singer);
console.log(lm);

//practice
let obj = {
  Name: "Manpreet",
  Price: 399,
};
function anyObj(obj) {
  console.log(`Name is ${obj.Name} and price is ${obj.Price}`);
}
anyObj(obj);

//practise with array
let arr = [10, 20, 30];
function arr2(arr) {
  return arr[2];
}
console.log(arr2(arr));
