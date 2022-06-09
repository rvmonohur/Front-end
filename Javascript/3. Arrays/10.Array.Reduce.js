{
    const items = [
        { id: '🍔', name: 'Super Burger', price: 399 },
        { id: '🍟', name: 'Jumbo Fries', price: 199 },
        { id: '🥤', name: 'Big Slurp', price: 299 }
      ];

    const reduced = items.reduce((prev,current)=>{
        console.log("prev ",prev, " current ", current);
        return prev.price + current.price;
    },0);
    console.log(reduced);


    const getTotalPrice = 
    items.map(price => price.price)
    .reduce((prev,cur) => prev + cur);

    console.log("getTotalPrice ", getTotalPrice);
}

{
/*
 * Problem two
 * Turn an array of voter objects into a count of how many people voted
 */

    const voters = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: false},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted:true},
        {name:'Tami' , age: 54, voted:true},
        {name: 'Mary', age: 31, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {name: 'Zack', age: 19, voted: false}
    ];

    const numberVoters = voters.reduce((prev,current) => {

        if(current.voted === true){
            return prev + 1;
        }else{
            return prev + 0;
        }
        // return prev + (current.voted === true ? 1 : 0);
    },0);

    console.log("numberVoters",numberVoters);

    const countVoters = voters.filter(x => x.voted === true)
                        .reduce((prev,current) => prev + 1,0);
    console.log("countVoters",countVoters);
}

/*
 * Problem three
 * Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 */

{
    const wishlist = [
        { title: "Tesla Model S", price: 90000 },
        { title: "4 carat diamond ring", price: 45000 },
        { title: "Fancy hacky Sack", price: 5 },
        { title: "Gold fidgit spinner", price: 2000 },
        { title: "A second Tesla Model S", price: 90000 }
      ];

    const total = wishlist.reduce((prev,current) => {
        return prev + current.price;
    },0);

    console.log("cost to buy everyting ", total);
}


/*
 * Problem five
 * Given an array of potential voters, return an object representing the results of the vote
 * Include how many of the potential voters were in the ages 18-25, how many from 26-35, 
 * how many from 36-55, and how many of each of those age ranges actually voted. 
 * 
 * The resulting object containing this data * should have 6 properties.
 */
{
const votersList = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

const voters = votersList.reduce((prevAccumulator,current) => {
 

    if(current.age >= 18 &&  current.age <=25){
        prevAccumulator.numYoungPeople ++;

        if(current.voted === true){
            prevAccumulator.numYoungVotes ++;
        }
    }

    return {...prevAccumulator}
},  {numYoungVotes:0 , numYoungPeople: 0}); 

console.log("voters",voters);

}



{
    const pokemon = [
    { name: "charmander", type: "fire" },
    { name: "squirtle", type: "water" },
    { name: "bulbasaur", type: "grass" }
    ];

    const pokemonModified = pokemon.reduce((acc, item) => {
        // add object key to our object i.e. charmander: { type: 'water' }
        console.log(acc[item.name] = {type: item.type});
        acc[item.name] = { type: item.type };
        return acc;
      }, {});

      console.log(pokemonModified);
}   






