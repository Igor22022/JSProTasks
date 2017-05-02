/* Homework 1 */

// 1.1
//За домомогою медода apply знайдіть найбільший і найменший елемент

var myArray = [ 10, 800, 20, 'string', 925, null, undefined, 700, 1  ];
function filterArr() {
  var filteredArr =  myArray.filter(function(number) {
                        return typeof number == "number";
                      });
  return filteredArr;
}

console.log(Math.max.apply(null, filterArr()));
console.log(Math.min.apply(null, filterArr()));

// 1.2
//Створіть метод множення (mult) і 3 методи, які використовують його doubleNumber, tripleNumber, quartetNumber (повертає подвійну, потрійне і тд. результат множення)

var calc = {
  multiply: function(a, b) {
    return a * b;
  },
  mult: function() {
    return [].reduce.call(arguments, this.multiply)
  }
};

var doubleNumber = calc.mult.bind(calc, 2);
var tripleNumber = calc.mult.bind(calc, 3);
var quartetNumber = calc.mult.bind(calc, 4);

console.log(doubleNumber(3, 1, 2));
console.log(tripleNumber(6, 3));
console.log(quartetNumber(6, 2, 0));


// 1.3
//Визначити злих персонажів за допомогою методів map i filter.

function Person(name, side) {
  this.name = name;
  this.side = side;
}

var hanSolo = new Person('Han Solo', 'Rebels');
var bobaFett = new Person('Darth Vader', 'Empire');
var princessLeia = new Person('Princess Leia', 'Rebels');

var people = [hanSolo, bobaFett, princessLeia];
var enemies = people.filter(function(currentValue, index, array) {
  return currentValue.side === "Empire";
})
.map(function(currentValue){
  console.log(`${currentValue.name} is bad Person.`)
});


/* Homework 2 */

// 2.1

class Product{
  constructor(name, price){
    this.name = 'product';
    this.price = 0;
    if(this.price < 0){
      alert(`Ціна товару ${this.name} не може бути ${this.price}!`);
    }
  }
}

class Food extends Product{
  constructor(name, price, food){

    super();
    this.name = name;
    this.price = price;
    this.food = food;
  }  
}
class Toy extends Product{
  constructor(name, price, toy){

    super();
    this.name = name;
    this.price = price;
    this.toy = toy;
  }
}
let bread = new Food("bread", 6.5);
let doll = new Toy("Doll", 16.5, 'Sandra');
console.log(`${bread.name} price: ${bread.price}`);
console.log(`${doll.name} ${doll.toy} price: ${doll.price}`);


// 2.2
// Реалізувати "гаманець" ( можна додавати і віднімати гроші) за допомогою Chain of Responsibility

var Wallet = function(amount) {
  this.amount = amount;
}

Wallet.prototype = {
  plus: function(num) {
    this.amount += num;
    log.sum(this.amount);
    return this;
  },
  minus: function(num) {
    this.amount -= num;
    log.sum(this.amount);
    return this;
  }
}

// log helper 

var log = (function() {
  var amount;
  return {
    sum: function(num) {
      amount = num;
    },
    show: function() {
      let result = amount;
      alert("Кількість гривень в гаманці: " + result);
    }
  }
})();

function run() {
  var request = new Wallet(300);

  request.plus(100).plus(500).minus(50).minus(10).plus(1000);

  log.show();
}
run();

// 2.3
// Реалізувати методи Post/Put/Delete для api, за допомогою XMLHttpRequest

