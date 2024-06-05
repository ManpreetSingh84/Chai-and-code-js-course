let arr = ["India", "Pakistan", "Japan", "china", "Brazil", "Canada"];
let fil = arr.filter((item) => {
  if (item == "Pakistan") {
    return "Papa Paise de do bhuk lage";
  }
});
console.log(fil);

let arr2 = [10, 20, 30, 4, 5, 6, 606, 7];

let fil2 = arr2.filter((cal) => {
  if (cal > 10) {
    return "big Daddy";
  }
});
console.log(fil2);
