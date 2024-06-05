let sym2 = Symbol("Manpreet Singh");

let obj = {
  Name: "Manpreet Singh",
  [sym2]: "Mannu",
  RollNo: 3,
  dc: {
    marvel: "Dc",
  },
  Location: "Jaipur",
  Email: "Happysin84@gmail.com",
  LastLogIn: ["Monday", "Tuesday", "Saturday"],
};
console.log(obj.Name);
console.log(obj["Name"]);
console.log(obj[sym2]);

let sym = Symbol("Manpreet Singh");

if (sym === sym2) {
  console.log("Same ");
} else {
  console.log("Not Same");
}

//notes
// agar koi symbol define kara hai and us ko object kai ander use karna hai to symbol ka namm key mai array ki form mai likho
// and clg karne pai bhi array ki tarah likhna hai object kai sath

// console.log(obj[sym2]);

//value overwright kai leye obj mai

obj.Email = "Happysin145@gmail.com";
console.log(obj.Email);

//object freeze

Object.freeze(obj);
obj.Email = "Happysin@gmail.com";
console.log(obj.Email);
