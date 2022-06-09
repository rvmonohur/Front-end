/**
 * IIEFs they don’t pollute the global object
 */

(function() {
    console.log("Regular function hello");
})();


(() => {
    console.log("IIEF arrow function");
})();


const load = (function() {
    console.log(`loading...`);
})();


// Named IIFE
(function foo(){
    console.log("foo");
})();                                                                                                                                                                  

/**
 * IIFE in actions
 */

(function add(num1,num2){
    let sum = num1 + num2;
    console.log(`sum ${sum}`);
})(20,5);

/**
 * By placing functions and variables inside an immediately invoked function expression, 
 * you can avoid polluting them to the global object:
 */

(function() {

    function multiply(num1,num2){
        return num1 * num2;
    }

    console.log(multiply(5,8));
})();



const carPartId = ( function(id){

    const theId = `CAR_PART_${id}`;
    console.log(theId);
})(1234);


const anotherCarPartId = (function(id){

    const theId = `CAR_PART_${id}`;

    function x (name){
        console.log(`${theId}_${name}`);
    }
    x('toyo');

})('xyz');


const lastCarPartId = (function(id){

    const theId = `CAR_PART_${id}`;

    return function(name){
        return `${theId}_${name}`;
    }

})('opq');

console.log(lastCarPartId('abcdefgh'));



const calculator = (function(){
    
    function add(val1,val2){
        return val1 + val2;
    }

    function multiply(num1,num2){
        return num1 * num2;
    }

    return {
        addNumbers: add,
        multiplyNumbers: multiply
    }
})();

let result_add = calculator.addNumbers(2,7);
console.log("result_add ", result_add);

let result_multiply = calculator.multiplyNumbers(2,7);
console.log("result_multiply ", result_multiply);
         