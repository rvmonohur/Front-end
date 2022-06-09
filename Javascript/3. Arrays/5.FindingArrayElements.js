const players = ["timo", "kai", "christian","mateo","mason"];

{
    const index = players.indexOf('mateo');
    if (index !== -1){
        console.log(index, players[index]);
    }

    const included = players.includes("romuelu");
    console.log("included",included);
}


const drinksWithId = [
    { id: 1, name: 'Lemonade' },
    { id: 2, name: 'Lime' },
    { id: 3, name: 'Peach' },
  ];

{
    const foundItemIndex = drinksWithId.findIndex(value => value.name === "Lime");
    console.log("foundItemIndex",foundItemIndex);   //1

    const foundItem = drinksWithId.find(value => value.name === "Lime");
    console.log("foundItem",foundItem);     //foundItem { id: 2, name: 'Lime' }

}

