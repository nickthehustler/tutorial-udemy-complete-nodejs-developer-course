// function greetUser(name)

function greetUser(name) {
  if (typeof name === 'undefined') {
    console.log('Hello world!');
  } else {
    console.log('Hello ' + name + '!');
  }

}

var name1;
greetUser(name1);

var name2 = 'Hillary';
greetUser(name2);
