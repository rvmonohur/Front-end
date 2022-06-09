const items = [
    { id: '🍔', name: 'Super Burger', price: 399, promo: false },
    { id: '🍟', name: 'Jumbo Fries', price: 199, promo: false },
    { id: '🥤', name: 'Big Slurp', price: 299, promo: true }
  ];


/**
 *  some() method to check if at least one element in the array passes a test.
 */
{
      const greaterThanOne = [1,2,3].some(x => x > 1);
      console.log("greaterThanOne",greaterThanOne)
      
      const isInPromo = items.some((item,index) => item.promo);
      console.log("isInPromo ",isInPromo);
}


/**
 *  every() method determines whether all elements of the array match the predicate:
 */
{

 const isEveryValueTrue = [true,true,false].every(Boolean);
 console.log("isEveryValueTrue",isEveryValueTrue);

 const isInStock = items.every(item => item.stock);
 console.log("isInPromo ",isInStock);
}

/**
 * The find() method returns the value of the first element in the provided array that satisfies the provided testing function. 
 * If no values satisfy the testing function, undefined is returned.
 */

 const found = items.find(item => item.id === '🍟');
  
 if (found) {
   console.log(`${found.name} ${(found.price / 100).toFixed(2)}`);
 }