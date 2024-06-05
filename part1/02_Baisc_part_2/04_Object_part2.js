// there are two type of ways to create a obj
// one is singleton
let singleton = new Object();
console.log(singleton);

//non-singleton object
let obj = {};
console.log(obj);

//combine 2 obj
let obj1 = {
  Name: "Manpreet",
};
let obj2 = {
  LName: "Singh",
};
let combine = Object.assign({}, obj1, obj2);
console.log(combine);

// Array combine karne kai leye array.of and object ko karne kai leye Object.assign

//spread operator se bhi combine ho jayege objects

let combinObj = { ...obj1, ...obj2 };
console.log(combinObj);
