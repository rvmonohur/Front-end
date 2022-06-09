const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
  ];

/**
 *  Map Syntax
 * 
 *  items.map((value,index,array) => {...}, thisArg)
 * 
 * The .map() method allows you to loop over every element in an array and modify or add to it 
 * and then return a different element to take that elements place. 
 * 
 * However .map() does not change the original array. 
 * It will always return a new array
 * 
 */

{
    const mapped = [1,2,3,4,5].map((x) => x * 2);
    console.log("mapped",mapped);
}


{
    const halfOffFries = items.map((item) => {

        if (item.id === '🍟'){
            return{
                ...item, price: item.price/2
            }
        }
        return item;
    });
    
    console.log("halfOffFries", halfOffFries);
}   


{
    const students = [{name: 'Rich', score: 33}, {name: 'Peter', score: 55}];

    const marks = students.map(x => x.score);
    console.log("marks ", marks); 
}

{
    const months = ['Jan', 'Feb', 'Mar', 'Apr'];

    const formattedMonths = months.map((month,index) => {
        const monthnumber = index + 1;
        return month + '-' + monthnumber;
    });
    console.log("formattedMonths",formattedMonths);
}




