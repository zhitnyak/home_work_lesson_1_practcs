//_______TO STRING________

//число к строке

let value = 0;

//--1--
let toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(
  `тип данных ${value}, через конструктор String():`,
  typeof toString
);

//--2--
toString = value + "";
console.log(`${value}, через конкотенацию:`, toString);
console.log(`тип данных ${value}, через конкотенацию:`, typeof toString);

//
value = 1982;

toString = String(value);
console.log(`${value} через конструктор String:`, toString);
console.log(`тип данных ${value} через конструктор String:`, typeof toString);

toString = value + "";
console.log(`${value} через конкоткнацию:`, toString);
console.log(`тип данных ${value} через конкотенацию:`, typeof toString);

//Значение бесконечности___________________________________
value = Infinity;

toString = value + "";
console.log(`${value}, через конкотенацию:`, toString);
console.log(`тип данных ${value}, через конкотенацию:`, typeof toString);

value = 1982;

toString = String(value);
console.log(`${value} через конструктор String:`, toString);
console.log(`тип данных ${value} через конструктор String:`, typeof toString);

toString = value + "";
console.log(`${value} через конкоткнацию:`, toString);
console.log(`тип данных ${value} через конкотенацию:`, typeof toString);

//Значение NaN_________________________________________
value = NaN;

toString = value + "";
console.log(`${value}, через конкотенацию:`, toString);
console.log(`тип данных ${value}, через конкотенацию:`, typeof toString);

value = 1982;

toString = String(value);
console.log(`${value} через конструктор String:`, toString);
console.log(`тип данных ${value} через конструктор String:`, typeof toString);

toString = value + "";
console.log(`${value} через конкоткнацию:`, toString);
console.log(`тип данных ${value} через конкотенацию:`, typeof toString);

//Значение BOLEAN к строке_____________________________________

value = true;
toString = String(value);
console.log(`${value} через конструктор String:`, toString);
console.log(`тип данных ${value} через конструктор String:`, typeof toString);

toString = value + "";
console.log(`${value} через конкоткнацию:`, toString);
console.log(`тип данных ${value} через конкотенацию:`, typeof toString);

value = false;
toString = String(value);
console.log(`${value} через конструктор String:`, toString);
console.log(`тип данных ${value} через конструктор String:`, typeof toString);

toString = value + "";
console.log(`${value} через конкоткнацию:`, toString);
console.log(`тип данных ${value} через конкотенацию:`, typeof toString);

//Значение undefined к строке__________________________________

value = undefined;
toString = String(value);
console.log(`${value} через конструктор String:`, toString);
console.log(`тип данных ${value} через конструктор String:`, typeof toString);

toString = value + "";
console.log(`${value} через конкоткнацию:`, toString);
console.log(`тип данных ${value} через конкотенацию:`, typeof toString);

//Значение null к строке____________________________________

value = null;
toString = String(value);
console.log(`${value} через конструктор String:`, toString);
console.log(`тип данных ${value} через конструктор String:`, typeof toString);

toString = value + "";
console.log(`${value} через конкоткнацию:`, toString);
console.log(`тип данных ${value} через конкотенацию:`, typeof toString);
