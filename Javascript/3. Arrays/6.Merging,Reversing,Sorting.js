
/**
 *  Merging Array
 */
{
    const drinks = [['Lemonade' , 99], ['Lime', 80]];
    const newDrink = ['Peach', 80];

    const mergedDrinks = [newDrink,...drinks];
    console.log("mergedDrinks",mergedDrinks);
}

/**
 * Reversing & Sorting
 */
{
    const drinks = [
        { id: 1, name: 'Lemonade' , price: 70},
        { id: 2, name: 'Lime' , price: 50 },
        { id: 3, name: 'Peach' , price: 80 },
      ];

    console.table(drinks.reverse());

    //sorting
    console.log( drinks.sort((a,b) => b.price - a.price));
}