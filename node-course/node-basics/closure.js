/* createAdder(baseNumber)

  return  function (numberToAdd)

*/

function createAdder (num1) {

  function adder (num2) {
    return num1 + num2;
  }

  return adder;
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));
