function operations(){

    function add(num1, num2){
        return num1 + num2;
    }
    return add;
}

console.log(operations);
console.log(operations());
//console.log(operations().add(1,4));
console.log(operations()(1,4));


function arithmetics(){

    function square(num){
        return num * num;
    }
}

console.log(arithmetics);
console.log(arithmetics());
// console.log(arithmetics().square(3));


function calculator(){
    
    return function subtract(num1, num2){
        return num1 - num2;
    }
}
console.log(calculator());
console.log(calculator()(7,5));


function cal(){

    function multiply(num){
        return num * num;
    }

    return {
        mul : multiply
    }
}
console.log(cal());
console.log(cal().mul(5));




const lastCarPartId = (function(id){

    const theId = `CAR_PART_${id}`;

    return function(name){
        return `${theId}_${name}`;
    }

})('opq');

console.log(lastCarPartId('abcdefgh'));



const calculatorOp = (function(){
    
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

let result_add = calculatorOp.addNumbers(2,7);
console.log("result_add ", result_add);

let result_multiply = calculatorOp.multiplyNumbers(2,7);
console.log("result_multiply ", result_multiply);
         