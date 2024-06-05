// JS Exeution Context
// they run in two Phase
// Phase one is global execution context variable ko undifiend (Memory creation phase)
// second one is function executon context variable mai value defiend hote hai (Execution phase)

// example
let a = 10;
let b = 20;
function hello(...num) {
  return num + num;
}
console.log(hello(Number(10, 20)));
