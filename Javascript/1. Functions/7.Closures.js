
/**
 * A closure is when a function remembers the context in which it was created, 
 * and still has access to local variables, 
 * even when that function is executed in a different context — or scope.
 */

/**
 * the closure (speakGreeting) still has access to the outer function’s variables 
 * (here, greetingText) and parameters (here, name).
 * 
 */
function sayHi(name){

    let greetingText = "Hello world";

    function speakGreeting(){
        return `${greetingText}_${name}`;
    }

    return speakGreeting;
};

console.log(sayHi());
console.log(sayHi()());
console.log(sayHi("marcus")());


function sayHello(firstname){
    
    return function sayText(lastname){
        return `${firstname}_${lastname}`;
    };
};

console.log(sayHello("kai"));
console.log(sayHello("kai")())
console.log(sayHello("kai")("havertz"));


function displayCounter(i){
    let counter = i;

    return incFunction = function(){
        return counter + 70;
    }();

    // let incrementCounter = () => counter + 100;
    // return incrementCounter();
}

console.log(displayCounter(9));



function calculate(x){

    return function multiply(y){
        return x*y;
    }
}
console.log("calculate ", calculate());
console.log("calculate(32) ", calculate(3));
console.log("calculate(3 x 2) ", calculate(3)(2));

const multiply3 = calculate(3);
console.log(multiply3(8));

const multiply4 = calculate(4);
console.log(multiply4(8));









