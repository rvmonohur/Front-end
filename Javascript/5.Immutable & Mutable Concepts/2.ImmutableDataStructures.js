const items = Object.freeze([
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 },
  ]);
console.log("items ", items);

/** ARRAY - Add */
{
    const newItem = { id: '🌭', name: 'Posh Dog', price: 299 };

    //instead of using items.push(newItem) which will mutate the array
    //use the following immutable way
    const newItems = [newItem, ...items];
    console.log(newItems, '\n');
}

/** ARRAY - Remove */
{
    // const removed = items.slice(0,1);
    // console.log(removed);
    // console.log(items);

    const updatedItems = items.filter((item) => item.id !== '🍔')
    console.log("updatedItems ", updatedItems);
}

// OBJECTS - Add
const itemobject = { id: '🦁', name:'lion king' }

itemobject.price = 100;
console.log("itemobject ", itemobject);

const itemThatIsNew = {...itemobject, price: 300}
console.log("itemThatIsNew ", itemThatIsNew);

// OBJECTS - Remove
const itemToRemove = { id: '👻', name: 'Ghost toy', price: 500 };
delete itemToRemove.name;
console.log("itemToRemove ", itemToRemove);

const itemToRemoveSpread = { id: '👻', name: 'Ghost toy', price: 500 };
const {price, ...LeftOerItems} = itemToRemoveSpread;
console.log("itemToRemoveSpread ", itemToRemoveSpread);
console.log("price ", price, " LeftOerItems ", LeftOerItems)
