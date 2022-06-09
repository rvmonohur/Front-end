{
    const actor = {
        firstName : "Tobey",
        lastName : "Maguire",
        movies : [  
            "spiderman 1","spiderman 2"
        ]
    }
    console.log(actor);

    const {
        firstName : fname
    } = actor
    console.log(fname);

    const {
        firstName,
        ln 
    } = actor;
    console.log(firstName, ln); //ln undefined
}