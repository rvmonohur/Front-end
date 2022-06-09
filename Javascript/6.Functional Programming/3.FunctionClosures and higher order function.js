const items = Object.freeze([
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 },
  ]);


// Higher Order Function (HOF)
// 1. Return a new function
// 2. Take other functions as arguments


const getNameFromId = (id) => {

    return function(listItems){
        return listItems.find((x) => x.id === id).name;
    }
}

const getSlurp = getNameFromId('🥤');
console.log("getSlurp ", getSlurp);
console.log("getSlurp ", getSlurp(items));


const getNameFromIdRefactored = (id) => (list) => {
    list.find((x) => x.id === id).name;
}
const getFries = getNameFromId('🍟');
console.log("getFries ", getFries(items));