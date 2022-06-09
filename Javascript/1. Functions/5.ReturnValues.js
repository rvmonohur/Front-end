// 1.
function getName(){
    return ("mason")
}
console.log(getName());

// 2.
function showName(fn){
    return ({fn})           //{ fn: 'ben' }
}
console.log(showName('ben'));

// 3.
function displayName(name){
    return ({firstname:name})
}
console.log(displayName("rom"));



// 4. arguments
const getSum = function(){
    let sum = 0;
    
    if(arguments.length > 0){
        sum = Array.from(arguments).reduce((prev,current) => prev + current);
    }
    return sum;
}
console.log(getSum(4,90,200,300));

// 5. Rest
const getTotal = function total(...args){

    let sum = args.length > 0 ? 
        () => args.reduce((prev,current) => prev + current) 
        :
        () => -1

    console.log("sum ", sum());
}


getTotal(1,3,5,6)
getTotal()