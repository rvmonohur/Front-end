
// 1. Creating a promise
let promise = new Promise(function(resolve, reject){
    //do something
});


// 2. 
function getEmployeeData(){
    return Promise.resolve({fn:"andrew"});
}
getEmployeeData().then(x => console.log(x));



// 3.
function getScore(){

    let promise = new Promise((resolve,reject) =>{
        setTimeout(resolve,1000,"Captain Marvel");
    });
    return promise;
}

getScore().then(x => console.log("x",x));




// 4.
const jobDone = true;
let jobStatus = new Promise((resolve,reject) => {
        jobDone === true ? resolve("job has been completed") : reject("job not yet done")
});

console.log(jobStatus);     //Promise { 'job has been completed' }


/** 5. Promise chaining */ 

// 5.1. then() method is used with the callback when the promise is successfully fulfilled or resolved.
jobStatus
.then(function(success){
    console.log(success)
    return "modified_"+success;
})
.then(function(x){
    console.log(x);
})  


// 5.2. catch() method is used with the callback when the promise is rejected or if an error occurs. 
// 5.3. The finally() method gets executed when the promise is either resolved successfully or rejected.

function retrieveCustomer(retrieveStatus){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(retrieveStatus){
                resolve({EmployeeName:"Nobody",Title:"Accountant"});
            }
            else{
                reject("Employee record not found")
            }
        },1500)
    });
}


let promiseResponse;

retrieveCustomer(false)
.then(function(success){
    console.log("success",success);
    promiseResponse = success;
}) 
.catch(function(error){
    console.log("error",error);
    promiseResponse = "bug..";
})
.finally(function(){
    console.log("code finished executing..---",promiseResponse);
    createAppFinaly();
})


function createAppFinaly(){
    console.log("creating app...", promiseResponse);
}

// let retrieveCustomerDetails = retrieveCustomer(true);
// retrieveCustomerDetails.then(success => console.log(success));









