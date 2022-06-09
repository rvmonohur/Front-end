let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

{
    let bigCities = [];
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].population > 3000000) {
            bigCities.push(cities[i]);
        }
    }
    console.log(bigCities);
}
    // instead of traditional method like above, the following can be used
{
    let bigCities = cities.filter(x => x.population > 3000000);
    console.log(bigCities);
}

/** How to access the index property */
{
    let winners = ["Anna", "Beth", "Cara"]

    let gold = winners.filter((winner, index) => index == 0)
    let silver = winners.filter((winner, index) => index == 1)
    let bronze = winners.filter((winner, index) => index == 2)

    console.log(`Gold winner: ${gold}, Silver Winner: ${silver}, Bronze Winner: ${bronze}`);

}

