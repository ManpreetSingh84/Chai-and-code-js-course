//this object kai ander use hota hai and arrow function mai use nhi hota

let obj = {
  UserName: "Manpreet",
  price: 999,
  Message: function () {
    return `Welcome ${this.UserName}, to our Website `;
  },
};

console.log(obj.Message());

if (true) {
  let va = 100;
  function hello() {
    console.log(va);
  }
  hello();
}

let obj2 = {
  hnji: "Hnji",
  function: function () {
    return `Welcome ${this.hnji}, to our Website `;
  },
};
console.log(obj2.function());
// console.log(this); this referal karta hai empty object ko

//another way to create an arrow function

let arrow = (num1, num2) => num1 + num2; //return bhi nhi likhna
console.log(arrow(100, 200));
