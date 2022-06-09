/** 1. Defining Arrays */

const drinks = ['Lemonade' , 'Lime' , 'Peach'];
console.log(drinks);

// Use built-in constructor
const fruits = new Array('Apple','Orange');
console.log(fruits);

const tropicalfruits = Array('Pear','Watermelon');
console.log(tropicalfruits);


/** 2. Accessing array elements */

console.log(drinks[1]);
console.log(drinks['1']);

//last element
console.log(drinks[drinks.length - 1]);

drinks[5] = "Ginger";
console.log(drinks);    //[ 'Lemonade', 'Lime', 'Peach', <2 empty items>, 'Ginger' ]


