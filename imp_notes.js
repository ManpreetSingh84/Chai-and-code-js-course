// clg table

let a = 10;
let b = 20;
let c = 30;
console.log([a, b, c]);
console.table([a, b, c]);

//flat
// array kai ander ko ek array mai karne kai leye?
let d = [10, 20, 30, 40, 50, [60, 70, 80, 90, 100, [110, 120, 130, 140, 150]]];
console.log(d.flat(Infinity));

let e = [10, 20, 30, 40, 50];
console.log(Array.isArray(e));
console.log(Array.from("MANNU")); //string ko array mai convert karega

// arrays combine kai leye array.of
let f = Array.of(a, b, c, d, e);
console.log(f);

//symbol lena
let g = Symbol("one");
let h = {
  [g]: "two",
};
console.log(h[g]);

//object combine karne kai leye
// method first
let i = {
  Name: "Manpreet",
};
let j = {
  LName: "Singh",
};
let k = {
  Names: "Singh",
};
let l = Object.assign({}, i, j, k);
// method 2 to add object
let m = { ...i, ...j, ...k };
console.log(m);

//object ki keys lene kai leye

let n = Object.keys(k);
console.log(n);

//object ki value lene kai leye
let q = Object.values(k);
console.log(q);

//object destructing
let r = {
  Name: "Mannu",
  LName: "Singh",
  Hometown: "Delhi",
};
let { Name, LName, Hometown } = r;
let { Name: Starting_name } = r; //key ka name bhi chnage kar sakte hai
console.log(Name);
console.log(LName);
console.log(Hometown);
console.log(Starting_name);

//array destructing
let s = [10, 20, 30];
let [ten, twenty, thirty] = s;
console.log(ten);
console.log(twenty);
console.log(thirty);

//another way to create an arrow function

let arrow = (num1, num2) => num1 + num2; //return bhi nhi likhna
console.log(arrow(100, 200));

//this
//sirf object mai use hota hai refernce kai leye kai leye
//arrow function mai use nhi hota

let objthis = {
  userName: "Manpreet Singh",
  function: function () {
    return `Welcome ${this.userName}, to our Js COurse`;
  },
};
console.log(objthis.function());

let arr = ["shaktiman", "Superman", "Power-Rangers", "Batman"];
let arr2 = ["India", "Pakistan", "Japan", "china", "Indonasia"];
let colab = Array.of(arr, arr2);
colab = colab.flat(Infinity);
// console.log(colab);

// for each loop is a high order function
//call back dunction mai name hi hota
//for each value retirn nhi karta
// example 1
colab.forEach(function (elem) {
  console.log(elem);
});
//example 2
colab.forEach((elem2) => {
  console.log(elem2);
});
//example 3
function hello(elem) {
  console.log(elem); //refernce dena hai bracket mai nhi ayega
}
colab.forEach(hello);

//example 4
function hello2(elem, index, array) {
  console.log(elem, index, array);
}
colab.forEach(hello2);

//example 5
let forEachArrayOfObj = [
  {
    country: "India",
    language: "Hindi",
  },
  {
    country: "China",
    language: "Chianees",
  },
  {
    country: "Nepal",
    language: "Neapli",
  },
];
forEachArrayOfObj.forEach((elem) => {
  console.log(elem);
  console.log(elem.country);
});

//example 6
// yeh return nhi karta variable kai ander
colab.forEach((item) => {
  console.log(item, "hnji kida");
  return item;
});

//for of
for (const i of colab) {
  console.log(i);
}

// example 2 with string
let val = "Manpreet Singh";
for (const elem of val) {
  console.log(`Each Element is ${elem}`);
}

//example 3
for (const elem of forEachArrayOfObj) {
  console.log(elem, "ha bhai");
}
// for in for object
let obj = {
  Name: "Manpreet",
  lName: "Singh",
};

for (const i in obj) {
  console.log(i, ":", obj[i]);
}
