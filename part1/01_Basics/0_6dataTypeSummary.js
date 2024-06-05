console.log("Hello");
// Primitive vs Non-Primitive

// #1 primitive
let str = "Manpreet Singh";
let bool = true;
let num = 9811784701;
let bigin = 98117847019213862276n;
let nu = null;
let un = undefined;
let sym = Symbol("Javascript"); //is used to uniqueness

console.table([str, bool, num, bigin, nu, un, sym]);
// #2 Non-primitive
let arr = [10, 20, 30, 40, 50, 60];
let obj = {
  Name: "Manpreet Singh",
};
function hello() {
  console.log("This is a Funtion");
}
hello();

//symbol example
let id = Symbol("123");
let anotheid = Symbol("123");
console.log(id === anotheid); //both are differnt with each other
