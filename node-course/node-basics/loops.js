// countDownWhile(startingPoint, stoppingPoint)
function countDownWhile(start, stop) {
  while (start >= stop) {
    console.log('while: ' + start);
    start--;
  }
}

// countDownFor(startingPoint, stoppingPoint)
function countDownFor(start, stop) {
  for (; start >= stop; start--) {
    console.log('for: ' + start);
  }
}

countDownWhile(20, 1);
countDownWhile(9, 20);
countDownFor(20, 1);
