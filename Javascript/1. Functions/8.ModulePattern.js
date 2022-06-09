/**
 * Module Pattern
 * 
 * Modules help keep our code neatly organized, and optimized for reuse. 
 * 
 * They also, by making use of closure, allow us to selectively obscure certain details and expose 
 * — or make available — selected functionality
 * 
 */


// https://amberley.dev/blog/2016-06-06-the-module-pattern-in-js/
function sayHi()
{

    function getFirstName(){
        return "timo";
    }

    function getLastName(){
        return "werner";
    }

    return {
        fn: getFirstName,
        ln: getLastName
    }
}
console.log(sayHi());
console.log(sayHi().fn());

var speak = sayHi();
speak.ln();




const sayHello = function(){

    function getAddress(){
        return "st pierre";
    }
    function getPhoneNumber(){
        return "230+4100000"
    }

    var publicApi = {
        publicfn1: getAddress,
        publicfn2: getPhoneNumber
    }
    return publicApi;
}();
 
console.log(sayHello.publicfn1());
console.log(sayHello.publicfn2());




/** https://javascript.plainenglish.io/data-hiding-with-javascript-module-pattern-62b71520bddd */

function EmployeeDetails()
{
    let _name = "mayank";
    let _age = 30;
    let _title = "developer";

    return {
        Name: _name,
        Age: _age,
        Title: _title
    }
}

/** The values that are returned on function call is saved as an object literal in the variable newEmployee */

console.log(EmployeeDetails());

let newEmployee = EmployeeDetails();
console.log("newEmployee", newEmployee);

console.log(newEmployee.Name);
console.log(newEmployee.Age);




/** Data Hiding with the Module Pattern */

function AnimalDetails()
{
    let _name = "Lion";
    let _organism = "Predators"

    let displayType = function() {
        return "Carnivore";
    } 
    // let displayType = () => "Carnivore";

    let territorySize = function(size){
        return size * size
    }

    return {
        Name: _name,
        Organism: _organism,
        Type: displayType(),
        Territory: territorySize
    }
}
let _lion = AnimalDetails();
console.log("_lion ", _lion);
console.log("_lion name ", _lion.Name);
console.log("_lion organisation ", _lion.Organism);
console.log("_lion territory ", _lion.Territory(100));






/** Javascript module pattern baiscs */
//https://coryrylan.com/blog/javascript-module-pattern-basics


//1. Creating a module  - Start using a anonymous closure

(function() {

})();


//2. Exporting our module - This basically assigns the module to a variable that we can use to call our modules methods.

var myModule = (function() {

})();


//3. Next lets create a public method for our module to call. 
//   To expose this method to code outside our module we return an Object with the methods defined

var publicMethodModule = (function() {

    return {
        
        publicMethod: function(){
            console.log("public method...");
        }
    }
})();
publicMethodModule.publicMethod();


//4. Private methods & Properties - JavaScript does not have a private keyword by default but using closures 
//   we can create private methods and private state

var privateMethodModule = (function() {

    var _private = "privaaate";

    function privateMethod(){
        console.log(_private);
    }

    return {
        
        publicMethod_1: function() { 
            privateMethod() 
        },
        
        publicMethod_2: privateMethod
    }
})();
privateMethodModule.publicMethod_1();
privateMethodModule.publicMethod_2();

console.log(privateMethodModule.privateMethod); //undefined -> protected by module closures
//privateMethod.privateMethod();


//5. Revealing module pattern - Using the return statement we can return a object literal that 'reveals' only the methods or properties 
//   we want to be publicly available.

var revealingModule = (function() {

    var _privateProperty = "Hello Private";
    var _publicProperty = "Hi Public";

    function _privateMethod(){
        console.log(_privateProperty);
    }
    function _publicMethod(){
        _privateMethod();
    }

    return {
        publicMethod: _publicMethod,
        publicProperty: _publicProperty
      };

})();

revealingModule.publicMethod(); // outputs 'Hello World'
console.log(revealingModule._publicProperty); // outputs 'I am a public property'
console.log(revealingModule._privateProperty); // is undefined protected by the module closure
revealingModule._privateMethod(); // is TypeError protected by the module closure



























