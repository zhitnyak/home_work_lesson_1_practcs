//_______TO NUMBER________

//строчное значение к числу

let value = "ёпрст";

let toNumber = Number(value);
console.log(`тип данных ${value} через конструктор Number:`, toNumber);
console.log(`тип данных ${value} через конструктор Number:`, typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(`${value} через унарный +:`, typeof toNumber);

//строчное число к числу_______________

value = "123";

toNumber = Number(value);
console.log(`тип данных ${value} через конструктор Number:`, toNumber);
console.log(`тип данных ${value} через конструктор Number:`, typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(`${value} через унарный +:`, typeof toNumber);

//пустая строка к числу________________

value = "";

toNumber = Number(value);
console.log(
  `тип данных пустая строка ${value} через конструктор Number:`,
  toNumber
);
console.log(
  `тип данных пустая строка ${value} через конструктор Number:`,
  typeof toNumber
);

toNumber = +value;
console.log(`пустая строка ${value} через унарный +:`, toNumber);
console.log(`пустая строка ${value} через унарный +:`, typeof toNumber);

//пустая строка с пробелом к числу_____________

value = " ";

toNumber = Number(value);
console.log(
  `тип данных пустая строка с пробелом ${value} через конструктор Number:`,
  toNumber
);
console.log(
  `тип данных пустая строкас пробелом ${value} через конструктор Number:`,
  typeof toNumber
);

toNumber = +value;
console.log(`пустая строка с пробелом ${value} через унарный +:`, toNumber);
console.log(
  `пустая строка с пробелом ${value} через унарный +:`,
  typeof toNumber
);

//BOOLEAN true к числу______________________

value = true;

toNumber = Number(value);
console.log(`тип данных BOOLEAN ${value} через конструктор Number:`, toNumber);
console.log(
  `тип данных BOOLEAN ${value} через конструктор Number:`,
  typeof toNumber
);

toNumber = +value;
console.log(`BOOLEAN ${value} через унарный +:`, toNumber);
console.log(`BOOLEAN ${value} через унарный +:`, typeof toNumber);

//BOOLEAN false к числу__________________________

value = false;

toNumber = Number(value);
console.log(`тип данных BOOLEAN ${value} через конструктор Number:`, toNumber);
console.log(
  `тип данных BOOLEAN ${value} через конструктор Number:`,
  typeof toNumber
);

toNumber = +value;
console.log(`BOOLEAN ${value} через унарный +:`, toNumber);
console.log(`BOOLEAN ${value} через унарный +:`, typeof toNumber);

//UNDEFINED к числу______________________

value = undefined;

toNumber = Number(value);
console.log(
  `тип данных UNDEFINED ${value} через конструктор Number:`,
  toNumber
);
console.log(
  `тип данных UNDEFINED ${value} через конструктор Number:`,
  typeof toNumber
);

toNumber = +value;
console.log(`UNDEFINED ${value} через унарный +:`, toNumber);
console.log(`UNDEFINED ${value} через унарный +:`, typeof toNumber);

//NULL к числу__________________________

value = null;

toNumber = Number(value);
console.log(`тип данных NULL ${value} через конструктор Number:`, toNumber);
console.log(
  `тип данных NULL ${value} через конструктор Number:`,
  typeof toNumber
);

toNumber = +value;
console.log(`NULL ${value} через унарный +:`, toNumber);
console.log(`NULL ${value} через унарный +:`, typeof toNumber);
