/**
 *  1. Parameter vs Arguments
 *  
 *  @param = name
 *  @argument = 'Toyota'
 */
function makeCar(name){
    console.log(`Making car ${name}`);
};
makeCar('Toyota');

/**
 * 2. Mandatory parameters
 * 
 *    ways to find out whether a parameter is missing
 */

//2.1 check if it is undefined
function displayName(mandatory,optional){
    if (mandatory === undefined){
        // throw new Error('Missing parameter using undefined: mandatory');
        console.log("Missing parameter using undefined: mandatory");
    }
}
displayName();

//2.2 you can interpret the parameter as a boolean. Then undefined is considered false
function showName(mandatory,optional) {
    if (!mandatory){
        console.log('Missing parameter using truthy: mandatory');
    }
}
showName();


//2.3 you can also check the length of arguments to enforce a minimum arity
function setNumber(mandatory,optional) {

    arguments.length < 1 ? 
        console.log("missing parameters using arguments") : 
        () => console.log("arguments ", arguments);

    //no paramerers are passed
    if (arguments.length == 0){
        mandatory = 99;
        optional = 1000;
    }
    
    //means second parameter is not passed
    if (arguments.length == 1){
        optional = 2000;
    }

}
setNumber();
setNumber(1,2,3,4);


//2.4
function requiredArg(){
    return 0;
}

function countPlants(x = requiredArg(), y = requiredArg()){
    return x+y;
}
console.log(countPlants());
console.log(countPlants(80,100));
console.log(countPlants(50));




/**
 *  3. handling missing parameters /fallback Using the Logical OR operator (‘||’)
 * 
 * 
 * 
 * 
 *      Examples of expressions that can be converted to false are
        null;
        NaN;
        0;
        empty string ("" or '' or ``);
        undefined.


        The nullish coalescing operator only reacts to null or undefined, 
        while the logical OR reacts to all falsy values, including "", 0, false, etc.

        When you want to ensure you only catch null and undefined, this is your way to go"
        >   const value = a ?? b
 */

//3.1
function person(name){

    let _name = name || "no name";
    console.log(`_name ${_name}`);

    name = name || 'anonymous';
    console.log(`name ${name}`);

}
let person1 = new person("timo");
person();


//3.2
function getTotal(a,b){
    b = b || 500;
    return a+b;
}
console.log(getTotal(1,80));
console.log(getTotal(4));


/**
 * 4. defaults values
 */

//4.1
function add(x=10,y=20){
    return x+y;
};
console.log(add());
console.log(add(4));
console.log(add(50,90));


//4.2
function makeAnotherCar(name ="Mustang", price = 1000, obj =  {make:'ford'}){    
    console.log(name.toUpperCase(), price, obj);
}
makeAnotherCar();

let obj__ = {transmission:"auto"}
makeAnotherCar("supra",400,obj__);