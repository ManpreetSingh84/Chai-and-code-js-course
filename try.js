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
// forEachArrayOfObj.forEach((elem) => {
//   console.log(elem);
// });

// let val = "Manpreet Singh";
// for (const elem of forEachArrayOfObj) {
//   console.log(`Each Element is ${elem.country}`);
// }
let values = forEachArrayOfObj.forEach((item) => {
  console.log(item, "hnji kida");
  return item;
});
console.log(values);
