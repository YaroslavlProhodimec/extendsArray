class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr = arr.filter((item) => item >= 10);

// filteredArr не является PowerArray, это Array
alert(filteredArr.isEmpty()); // Error:
let obj = { 5: 5 };

console.log(obj); // [object Object]
// скопируем метод toString в переменную для удобства
let objectToString = Object.prototype.toString;

// какой это тип?
let arr = [];

alert(objectToString.call(arr)); // [object Array]
let s = Object.prototype.toString;

alert(s.call(123)); // [object Number]
alert(s.call(null)); // [object Null]
alert(s.call(alert)); // [object Function]

// Можно использовать {}.toString.call вместо instanceof
// для встроенных объектов, когда мы хотим получить тип в виде строки, а не просто сделать проверку.
function instance(obj, f) {
  if (typeof f !== "function") return false;

  if (f[Symbol.hasInstance]) {
    return f[Symbol.hasInstance](obj) === true;
  }

  while (obj !== null) {
    if (obj.__proto_ === f.prototype) return true;
    obj = obj.__proto_;
  }

  return false;
}

console.log(instance({}, Object)); // true
