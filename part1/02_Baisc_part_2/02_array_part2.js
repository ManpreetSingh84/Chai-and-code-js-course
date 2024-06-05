let heros = [
  "Avengers",
  "shaktiman",
  "spiderman",
  "bheem",
  "ninja hathori",
  "mighty raju",
  "thor",
  "iron man",
];
let dc = ["Batman", "tmkoc", "flash"];
let singer = ["Honey Singh", "Badshah", "alfaz"];
// es sai array kai ander array aa gya
// heros.push(dc);
// console.log(heros);

// best way is add a array
// new Array return karta hai

const lm = heros.concat(dc, singer);
console.log(lm);

//another way of concat array

const spread = [...heros, ...dc, ...singer];
console.log(spread);

//array kai ander array hai us ko ek he array mai le ana kai leye flat ka use karte hai

let fl = [
  10,
  20,
  30,
  40,
  50,
  [60, 70, 80, 90, 100, [110, 120, 130, 140, 150]],
  [160, 170, 180, 190, 200],
];
let fla = fl.flat(Infinity);
console.log(fla);

//is array and convert string into array
console.log(Array.isArray(fl));
console.log(Array.from(fl));
console.log(Array.from("MANPREET SINGH"));
console.log(Array.from({ Name: "Manpreet" })); //empty array deta ha

let combine1 = 100;
let combine2 = 100;
let combine3 = 100;
console.log(Array.of(combine1, combine2, combine3));
