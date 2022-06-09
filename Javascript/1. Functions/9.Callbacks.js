

/**
 * 
Why do we need a Callback function?

JavaScript runs code in sequential order, but sometimes a situation or some delay can cause the execution of statements 
in non-sequential order. 

However, if you want to wait for the previous function’s result before executing the second function in some cases. 
This is known as asynchronous programming.

So in such situation, the Callback functions comes to the rescue. They ensure that the second function will not execute before the execution result of the first function. 
But the second function will execute right after the first one finishes its task

 */

function firstMessage(){
    setTimeout(() =>{
        console.log("fn first msg executed...");
    },200)
};

function secondMessage(){
    console.log("fn second msg...")
};

firstMessage();
secondMessage();




function carPartId(carpartname, fn)
{
    console.log("car part ", carpartname);
    fn();
}

carPartId('left door', function(){
    console.log("i am the callback function");
});



/** It is a function passed as an argument of another function, to be executed later or immediately.
 */
function carDetails(name, fn){
    const theId = "CAR_PART_XYZ_123_"+name;
    fn(theId);
}

carDetails('engine', function(id){
    console.log("id ", id)
});




function showTime(x, done){
    setTimeout(()=>{
        console.log("Show time is at ", x);
        done("23:00");
    },500);

}

function showEnd(end){
    console.log("Show end..",end);
}

showTime("18:00", showEnd)





/** https://lo-victoria.com/understanding-javascript-callback-functions-for-beginners */

function prepare(ingredients, callback)
{
    console.log("Preparing " + ingredients);
    callback(ingredients);
}

function chop(args){
    console.log("chopping... ARGS", args);
}

prepare("onions and garlics ", chop)

prepare("chicken and lamb ", function clean(args){
    console.log("cleaning meat.. ARGS", args);
});





/** https://www.toolsqa.com/javascript/callback-functions-javascript/ */

//1. Anonymous function as callbacks 

function firstAnonym(fn){

    setTimeout(() => {
        console.log("anony ");
        fn();
    }, 800);   
}

firstAnonym(function(){ //anonymous function
    console.log("inside anonymous function");
});













