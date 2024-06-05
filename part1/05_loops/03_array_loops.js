let arr = ["shaktiman", "Superman", "Power-Rangers", "Batman"];
let arr2 = ["India", "Pakistan", "Japan", "china", "Indonasia"];
let colab = Array.of(arr, arr2);
colab = colab.flat(Infinity);
// console.log(colab);

// for each loop is a high order function
//call back dunction mai name hi hota
// example 1
colab.forEach(function (elem) {
  console.log(elem);
});
//example 2
colab.forEach((elem2) => {
  console.log(elem2);
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
// for in for object
let obj = {
  Name: "Manpreet",
  lName: "Singh",
};

for (const i in obj) {
  console.log(i, ":", obj[i]);
}
