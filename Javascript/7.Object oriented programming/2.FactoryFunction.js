/** A factory function is a function that returns a new object.  */

{
    function createPersonObject(firstName, lastName)
    {
        return {
            fn: firstName,
            ln: lastName,
    
            phoneNumber: function(){
                return "123";
            }
        }
    }
    let john = createPersonObject("john","doe");
    console.log(john);
}



/**
 *  Literals for One, Factories for Many
    If you need to create many objects, you’ll want to combine the power 
    of object literals and factory functions.
    With a factory function, you can create as many user objects as you want
 */
{
const movieName = "avengers";
const vilain = "thanos";

function getMovie(){
    return {
        movieName,
        vilain
    }
}
console.log(getMovie());    //{ movieName: 'avengers', vilain: 'thanos' }


function createUser({userName,avatar}){
    return {
        userName,
        avatar
    }
}
console.log(createUser("tony","ironman"));
console.log(createUser({userName:"captain america", avatar:"shield"}));


function createHero(userName,avatar){
    return {
        userName,
        avatar
    }
}
console.log(createHero("tony","ironman"));
// console.log(createHero({userName:"captain america", avatar:"shield"}));

}



/** Returning objects */
{
    const noop = () => {foo:"bar"};
    console.log("noop ", noop());

    const createFoo = () => ({cake: 'chocolate'});
    console.log(createFoo());
}

/** Destructuring */
{
    const createUser = ({
        userName = "anonym", 
        avatar = "ano"
        } = {}) => ({
            userName, 
            avatar
        });
    
    const foo = createUser({userName:"rvm",avatar:"jeidi"});
    console.log("foo ", foo);

    const foo1 = createUser();
    console.log("foo1 ", foo1);

}


/**
 * https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/factory-functions-and-the-module-pattern
What would happen here if we tried to call jimmie.die()? What if we tried to manipulate the health: jimmie.health -= 1000? Well, those are things that we have NOT exposed publicly so we would get an error. This is a very good thing! Setting up objects like this makes it easier for us to use them because we’ve actually put some thought into how and when we are going to want to use the information. In this case, we have jimmie’s health hiding as a private variable inside of the object which means we need to export a function if we want to manipulate it. In the long run, this will make our code much easier to reason about because all of the logic is encapsulated in an appropriate place.


*/

const player = function(name, level)
{
    let health = level * 2;

    const getLevel = function(){
        return level;
    }
    const getName = function(){
        return name;
    }
    const die = function(){
        console.log("dead...retry !");
    }

    const damage = function(x){
        health = health - x;
        
        if(health <= 0){
            die();
        }
    }

    const attack = function(enemy){
        if (level < enemy.level){
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
        if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    }

    return {
        getLevel,
        getName,
        damage,
        attack
    }
}

const jimie = player('jim' , 10);
const badguy = player("thierry",2);
console.log("jimie", jimie);
jimie.attack(badguy);



