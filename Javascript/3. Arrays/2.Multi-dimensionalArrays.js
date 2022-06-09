const drinks = [['Lemonade' , 99], ['Lime' , 50 ], ['Peach', 80]];
console.table(drinks);


// Outer loop for outer Array
for (let i = 0 ; i < drinks.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = drinks[i].length;

    // inner loop is for the inner arrays
    for (let j = 0; j < innerArrayLength; j++ ){
        
        console.log(drinks[i][j]);
    }
}