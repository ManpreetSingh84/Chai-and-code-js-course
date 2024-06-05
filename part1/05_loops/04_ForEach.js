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
let values = colab.forEach((item) => {
  console.log(item, "hnji kida");
  return item;
});

console.log(values); //sath mai undefind bhi dega
