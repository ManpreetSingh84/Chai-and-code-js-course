console.log(first);
var first = "Hello This is a First";

console.log(three(10, 20, 30));
function three(...a) {
  return a;
}

console.log(second(10)); //error keyoki variable mai hai and clg ayega return kara hai to // expression bhi bolte hai function ko
var second = function (...a) {
  return a;
};

console.log(three(10)); //arrow function
var second = (...a) => {
  return a;
};
