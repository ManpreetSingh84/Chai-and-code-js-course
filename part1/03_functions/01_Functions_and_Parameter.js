// type one
function functionOne() {
  console.log("Hello");
}
//type 2
let functionTwo = function () {
  console.log("Hello");
};
//type 3
let functionThree = () => {
  console.log("Hello");
};

//return
function functionFour(num1, num2 = 200) {
  return (result = num1 + num2);
}
let outputSaveInVar = functionFour(100);
console.log(outputSaveInVar);
