// toggleBoolean(bool)
function toggleBoolean(bool) {
  if(typeof bool === 'boolean') {
    return !bool
  }
  return "Warning! Not a boolean.";
}

var value1 = true;
console.log(toggleBoolean(value1));

var value2 = 'test string';
console.log(toggleBoolean(value2));

var value3 = 45;
console.log(toggleBoolean(value3));
