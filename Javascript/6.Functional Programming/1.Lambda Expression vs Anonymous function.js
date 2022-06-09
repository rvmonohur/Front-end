/** Anonymous function */

const printName = function(){
    console.log("Spider-man");
}
printName();

/** 
 * On the other hand, lambda expressions are abstractions which enable a function to be passed around like data. 
 * 
 * In JavaScript, everything can be treated as an object, 
 * this means that a function can be sent into another function as a parameter 
 * and can also be retrieved from the called function as a return value. 
 * 
 * arrow function, aka a lambda function.
 */

{
    const arr = [1, 2, 3, 4, 5];

    const square = (num) =>{
        return num * num;
    }

    function traverseArray(listValues, func)
    {
        let result = '';
        for (const value of listValues){
            result += func(value) + ' ';
        }
        console.log("result ", result);
    }
    traverseArray(arr,square);
}

//https://redfern.dev/articles/lambda-expressions-vs-anonymous-functions/