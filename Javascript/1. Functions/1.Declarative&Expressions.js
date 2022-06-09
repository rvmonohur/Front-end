
/**
 *  1. Function declaration
 *  --defined with the function keyword then a name 
 */
function makeCar_declaration(){
    console.log("function declaration");
}
makeCar_declaration();


/**
 *  2. Function expression
 *  does not have a name, usually called an anonymous function
 */ 
const makeCar_expression = function (){
    console.log("function expression")
}
makeCar_expression();


//3. Named function expression
const makeCar_Named_expression = function makeCar(){
    console.log("named function expression")
}
makeCar_Named_expression();


/**
 * Declaration vs Expression
 * 
 * Hoisting refers to the availability of functions and variables “at the top” of your code, 
 * as opposed to only after they are created. 
 * 
 * The objects are initialized at compile time and available anywhere in your file.
 * 
 * Function declarations are hoisted but function expressions are not.
 * 
 */

doStuff();
function doStuff(){
    console.log("hoisting in function declaration");
}

doStuff_exp()
const doStuff_exp = function(){
    console.log("hoisting in function expression");
}






