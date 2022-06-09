/**
 * https://www.digitalocean.com/community/tutorials/js-async-functions
 */

function scaryClown(){

    return new Promise((resolve,reject) =>{        
        setTimeout(resolve("Peter Parker"),5000);
    });
}

async function getPersonName() {
    const name = await scaryClown();
    console.log({name});
    return name;
}

// getPersonName();                                                                                                                                                              
let fn = getPersonName();
console.log("name" ,fn);    //Promise { <pending> }



/**
 * Promise-Returning
 * 
 * Async functions always return a promise
 * Since what’s returned is a promise, you could do something like this instead:
 */

async function displayName(){
    return "Zendaya";
}
displayName().then(x => console.log(x));




/**
 * Different forms
 */

// Async function expression
const fe = async function(){

}

// Async function declaration
async function fd(){

}

//Async arrow function
const af = async () => {

}


/** try...catch statements */
function lotto(){

    return new Promise((resolve,reject) =>{

        const val = Math.round(Math.random() * 1); //0 or 1

        val === 1 ? resolve(`Yayy ! ${val}` ) : reject(`Better luck next time ${val}`);

    });
}

async function getResult(){

    try{
        let result = await lotto();
        console.log("try...",result);
    }
    catch(error){
        console.log("catch...",error)
    }
}

for (let i =0; i < 5; i++){
    getResult();
}





/** Catching  runtime or syntax error happening */

function convertUpper(val){
    return new Promise(function(resolve,reject){
        resolve (val.toUpperCase());
    })
}

async function displayUpper(v){
    try{
        let text = await convertUpper(v);
        console.log("text -- ", text);
    }
    catch(error){
        console.log("catching error...",error);
    }
}
displayUpper("barryAllen");
displayUpper(900);




