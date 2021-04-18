//_______TO BOOLEAN________

//строчное значение к BOOLEAN

let value = "qrewt";
let toBoolean = Boolean(value);
console.log(`тип данных ${value} через конструктор Boolean:`, toBoolean);
console.log(`тип данных ${value} через конструктор Boolean:`, typeof toBoolean);

toBoolean = !!Boolean(value);
console.log(`${value} через унарный !!:`, toBoolean);
console.log(`${value} через унарный !!:`, typeof toBoolean);

//строчное число к BOOLEAN

value = "4519195";
toBoolean = Boolean(value);
console.log(`тип данных ${value} через конструктор Boolean:`, toBoolean);
console.log(`тип данных ${value} через конструктор Boolean:`, typeof toBoolean);

toBoolean = !!Boolean(value);
console.log(`${value} через унарный !!:`, toBoolean);
console.log(`${value} через унарный !!:`, typeof toBoolean);

//число к BOOLEAN_______________

value = 554;
toBoolean = Boolean(value);
console.log(`тип данных ${value} через конструктор Boolean:`, toBoolean);
console.log(`тип данных ${value} через конструктор Boolean:`, typeof toBoolean);

toBoolean = !!Boolean(value);
console.log(`${value} через унарный !!:`, toBoolean);
console.log(`${value} через унарный !!:`, typeof toBoolean);

//пустая строка к BOOLEAN_______________

value = "";
toBoolean = Boolean(value);
console.log(
  `тип данных пустой строки ${value} через конструктор Boolean:`,
  toBoolean
);
console.log(
  `тип данных пустой строки ${value} через конструктор Boolean:`,
  typeof toBoolean
);

toBoolean = !!Boolean(value);
console.log(`пустая строка ${value} через унарный !!:`, toBoolean);
console.log(`пустая строка ${value} через унарный !!:`, typeof toBoolean);

//пустая строка с пробелом к BOOLEAN_______________

value = " ";
toBoolean = Boolean(value);
console.log(
  `тип данных строки с пробелом ${value} через конструктор Boolean:`,
  toBoolean
);
console.log(
  `тип данных строки с пробелом ${value} через конструктор Boolean:`,
  typeof toBoolean
);

toBoolean = !!Boolean(value);
console.log(`строка с пробелом ${value} через унарный !!:`, toBoolean);
console.log(`строка с пробелом ${value} через унарный !!:`, typeof toBoolean);

//Значение бесконечности___________________________________
value = Infinity;
toBoolean = Boolean(value);
console.log(`тип данных ${value} через конструктор Boolean:`, toBoolean);
console.log(`тип данных ${value} через конструктор Boolean:`, typeof toBoolean);

toBoolean = !!Boolean(value);
console.log(`${value} через унарный !!:`, toBoolean);
console.log(`${value} через унарный !!:`, typeof toBoolean);

//Значение NaN_________________________________________
value = NaN;
toBoolean = Boolean(value);
console.log(`тип данных ${value} через конструктор Boolean:`, toBoolean);
console.log(`тип данных ${value} через конструктор Boolean:`, typeof toBoolean);

toBoolean = !!Boolean(value);
console.log(`${value} через унарный !!:`, toBoolean);
console.log(`${value} через унарный !!:`, typeof toBoolean);

//Значение null________________________________
value = null;
toBoolean = Boolean(value);
console.log(`тип данных ${value} через конструктор Boolean:`, toBoolean);
console.log(`тип данных ${value} через конструктор Boolean:`, typeof toBoolean);

toBoolean = !!Boolean(value);
console.log(`${value} через унарный !!:`, toBoolean);
console.log(`${value} через унарный !!:`, typeof toBoolean);
