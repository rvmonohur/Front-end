/**
 * => expression
 *
 * is equivalent to the following expression:
 *
 * => { return expression; }
 */

let add = (num1, num2) => num1 + num2;
console.log(add(10, 20));

//1. No parameter
let logMsg = () => console.log("hello world");
logMsg();

//2. One Parameter -- You can omit the parentheses
let square = (num1) => num1 * num1;
console.log(square(25));

//3. object literal
let setColor = function (color) {
  return { value: color };
};
let backgroundColor = setColor("Red");
console.log(backgroundColor);
console.log(backgroundColor.value);

let setName = (firstName) => ({ fname: firstName });
console.log(setName("elon"));
console.log(setName("elon").fname);

//4. As an expression
let age = 10;
let welcome = age < 18 ? 
    () => console.log("baby") : 
    () => console.log("Adult");
welcome();

let welcome2 =  age < 18    ? 
    (function () {console.log(`baby ${age}`);})() : 
    (function () {console.log(`adult ${age}`);})();
welcome2();



// 1. Arrow function vs regular function  -this keyword

/**
 *  Things you should avoid with arrow function
 *  You should not use arrow functions to create methods inside objects.
 */

let robots = {
  name: "emo",
  sayName: () => {
    console.log("robots ", this.name);
  },
};
robots.sayName(); //undefined

let SUVs = {
  name: "jeep",
  printInRegular: function () {
    console.log(`print in regular ${this.name}`);
  },
  printInArrow: () => console.log(`print in arrow ${this.name}`),
};

SUVs.printInRegular();
SUVs.printInArrow();

function Person() {
  this.name = "jack";
  this.age = 25;

  this.sayName = function () {
    console.log("sayName ", this.name);             //Jack
    
    function regularFunction() {
      console.log("regularFunction ", this.name);        //Undefined
    }
    regularFunction();
  
    let arrowFunction = () =>  console.log("arrowFunction ", this.name);    //Jack
    arrowFunction();                    
    };
}
let x = new Person();
x.sayName();


// 2. Arrow function vs regular function -Argument binding

let getArguments = function () {
  console.log(arguments);
};
getArguments(1, 3, 4, 56, 7);

let showData = {
  showArg: function () {
    console.log(arguments);
  },
};
showData.showArg(20, 30, 40);


let showDataArrow = {
    showArg: () => console.log(arguments)
};
showDataArrow.showArg(90,10,20);

/**
 * above arrow function does not work with arguments
 * solution is to use ...rest
 */

let showData_rest = {
  showArg: (...args) => console.log("showData_rest ", args),
};
showData_rest.showArg(90, 100, 200);
