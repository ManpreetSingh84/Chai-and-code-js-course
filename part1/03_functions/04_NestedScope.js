function one() {
  let va = 10;
  function two() {
    function three() {
      function four() {
        console.log(va);
      }
      four();
    }
    three();
  }
  two();
}
one();
