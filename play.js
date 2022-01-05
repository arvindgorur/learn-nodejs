const fs = require('fs');

fs.writeFileSync('hello.txt','Hello, World!');

const myFunc = (msg) => {
  return msg;
};

const person = {
  name: 'Superman',
  age: 42,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const printName = ({ name }) => {
  console.log(name);
}
printName(person);
const { name, age } = person;
console.log(name, age);
console.log(myFunc('Hello, World!'));

const hobbies = ['Sports', 'Flying'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

//Async
const fetchData = callbackFunction => {
  setTimeout(() => {
    callbackFunction('Done!');
  }, 1500);
};

setTimeout(() => {
  console.log('Timer is done');
  fetchData(text => {
    console.log(text);
  })
}, 2000);

console.log('Hello');
console.log('Hi!');

//Promise
const fetchData2 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done 2!');
    }, 1500)
  });
};

setTimeout(() => {
  console.log('Timer is done 2!');
  fetchData2().then(text => {
    console.log(text);
  });
}, 2000);