const student = {
    id: 1610282,
    name: 'Pulisic',
    hobby: {
        fulltime: "programming",
        parttime: "fishing"
    }
}

/** 1. Adding property*/
student.phoneNumber = 7890000;

student["emailAddress"] = "rvm";

console.log(student);


/** 2. Deleting property */

delete student.id;
console.log("student",student);

const {phoneNumber,...rest} = student;
console.log(rest);


/** 3. Merging Objects */
const drink = {
    drinkId : '123',
    drinkName: 'Lime fuzzy',
    id: 99
}

//same property gets overriden by last object's property (last one wins)
const merged = {...student, ...drink };
console.log("merged",merged);

const mergedAnother = {...student, ...{drink} };
console.log("mergedAnother",mergedAnother);


const mergedSecond = Object.assign({}, student, {drink});
console.log("mergedSecond",mergedSecond);