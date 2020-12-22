const Person = require('./Person');

// console.log(person);
// console.log(`Hello, my name is ${person.name}, and I am ${person.age}`)

const Person1 = new Person('John Doe', 30);
console.log(Person1.greeting());
