/**
 *  1. Rest parameters
 * 
 *  collects all the remaining elements into an array.
 * 
 *  a rest element cannot have a trailing comma. 
 *  It must be the last element in a destructuring assignment.
 */

// 1.1.
function getValues(value1, ...remainingValues){
    console.log(value1, remainingValues);
}
getValues(50,80,120,230,900);

// 1.2.
function getTotal(val){
    return {val};
}
console.log(getTotal(200)); //{ val: 200 }

// 1.3.
function getSum(val, ...num){
    return ({val,num});
}
console.log(getSum(80,300,450,670,930)); //{ val: 80, num: [ 300, 450, 670, 930 ] }

// 1.4
function displayTotal(...args){
    let result = 0;

    for (let arg of args){
        result += arg;
    }
    return result;
}
console.log(displayTotal(1,2,3,4,5,6));


// 1.5
function family(spouse, ...children){
    console.log(`Spouse: ${spouse}`);

    for (const child of children){
        console.log(`Child: ${child}`);
    }
}
family('Veronica', 'Max', 'Jack');


/**
 *  2. Spread operator
 *  
 *  unpacks elements
 */


// 2.1 The spread operator unpacks the elements of the odd array
const odd = [1,2,3];
const combined = [5,6, ...odd,7,8];
console.log("combined ", combined)


//2.2. 
const arrValues = ['My', 'name', 'is', 'Jack'];

console.log(arrValues);   // ["My", "name", "is", "Jack"]
console.log(...arrValues); // My name is Jack   Equivalent to console.log('My', 'name', 'is', 'Jack');


//2.3. Copy array using Spread operator
const arr1 = [1,2,3,4];
const arr2 = [...arr1, 5,6,7];
console.log(arr2);


//2.4. Using Spread in a function call
function sum (a,b,c,d){
    return a+b+c+d;
}

// will take first 4 elements
const argsToAdd = [2,4,6,8,10,20];
console.log(sum(...argsToAdd))  //unpacks



/**
 * examples
 */
const user1 = { name: 'George', surname: 'Elis' };
const user2 = { ...user1 };

user2.surname = 'Holland';
console.log("user2 ", user2);


// following can be optimized as follows 
// This code works because if you have the same key twice inside an object, the last one wins.
const person1 = { name: 'tobey', surname: 'maguire' };
const person2 = { ...user2, surname:'garfield' };
console.log("person2 ", person2);


/**
 * Using an array as an argument
 */
const getUser = function(name, surname){
    console.log(name, surname);
}

const userInfo = ['George', 'Roubie'];
getUser(...userInfo);   
getUser(userInfo[0], userInfo[1]);


let myDogs = [`Riggins`, `Lyla`];
let parentsDogs = [`Ellie`, `Remi`];
const holidayDoghouse = [...myDogs, ...parentsDogs];
console.log(holidayDoghouse);


// Spreading object properties:
let existingAnimals = {
    dogs: 2,
    cats: 4,
    donkeys: 2,
    horses: 2,
  };
  let newAnimals = {
    goats: 2,
  };                 
  const allAnimals = {
    ...existingAnimals,
    ...newAnimals,
  };
  console.log(allAnimals);



/**
 * Conditionally add properties to an object
 */
const getRole = () => 'admin';
const user = { 
  name: 'George', 
  surname: 'Roubie',
  
  role: getRole(),

  ...(getRole() === 'admin' && { admininstrator: true  }),

  ...(getRole() === 'developer' && { dev: true })
};
console.log("user", user);