const drinks = ["Pepsi", "Lemonade", "Cola"];

{
  for (let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];

    if (drink === "Lemonade") {
      console.log("Pour me a glass of " + drink);
    }
  }
}

/** Break & Continue */
{
    let count = 0;
    for (let i = 0; i < drinks.length; i++){
        const drink = drinks[i];

        if (drink === "Pepsi"){
            console.log("Pour ", drink);
            continue;
        }
        count++;
    }
    console.log("continue... count ", count);
}

{
    let count = 0;
    for (let i = 0; i < drinks.length; i++){
        const drink = drinks[i];

        if (drink === "Pepsi"){
            console.log("Pour ", drink);
            break;
        }
        count++;
    }
    console.log("break... count ", count);
}


/** Iteration using For...of */
for (const drink of drinks){
    console.log("of drink ", drink);
}

for (const drink in drinks){
    console.log("in drink ", drink);
}


const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
  ];

/** Iteration using forEach */
items.forEach((item) => {
    console.log(item);
})