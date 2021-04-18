console.log(student); //undefined

var student = "Maksimka";
console.log(student);

var count; //объявление переменной без инициализации
console.log(count); //undefined

count = 1;
console.log(count);
count = 5;
console.log(count);

// console.log(number); //Uncaught ReferenceError: Cannot access 'number' before initialization at
let number = 38;
console.log(number);

let age; //объявление переменной без инициализации
console.log(age); //undefined

age = 22;
console.log(age);
age = 28;
console.log(age);

// console.log(userName); //variables.js:26 Uncaught ReferenceError: Cannot access 'userName' before initialization
// const name; //Uncaught SyntaxError: Identifier 'userName' has already been declared
console.log(name); //пустая строка

const userName = "Karina";
console.log(userName);

// userName = "...";//Uncaught TypeError: Assignment to constant variable.
