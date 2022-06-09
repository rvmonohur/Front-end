/** Adding */
{
    const drinks = ['Lemonade' , 'Lime' , 'Peach'];

    // beginning
    drinks.unshift('Water');
    console.log(drinks);

    const newDrinksArray = ['Cola',...drinks];
    console.log("newDrinksArray",newDrinksArray);
}

{
    // middle
    const drinks = ['Lemonade' , 'Lime' , 'Peach'];

    const newDrinksArray = [...drinks.splice(0,2) , 'Mojito' ,  ...drinks.splice(1, -1) ];
    console.log(newDrinksArray);
}


{
    const drinks = ['Lemonade' , 'Lime' , 'Peach'];

    //end
    drinks.push("Mojito");
    console.log(drinks);
}



/** Removing */

{
    const players = ["timo", "kai", "christian","mateo","mason"];

    //beginning
    const removed = players.shift();
    console.log(removed);   //timo
    console.log(players);   //[ 'kai', 'christian', 'mateo', 'mason' ]
}


{
    const players = ["timo", "kai", "christian","mateo","mason"];

    //end
    const removed = players.pop();
    console.log(removed);   //mason
    console.log(players);   //[ 'timo', 'kai', 'christian', 'mateo' ]
}



{
    const players = ["timo", "kai", "christian","mateo","mason"];

    //beginning
    const removed = [ ...players.slice(0,2)];
    console.log(removed);   //[ 'timo', 'kai' ]
    console.log(players);   //[ 'timo', 'kai', 'christian', 'mateo', 'mason' ]
}















