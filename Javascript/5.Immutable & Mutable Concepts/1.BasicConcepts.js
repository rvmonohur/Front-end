/**
 * Using const does not allow us to reassign, 
 * however if something is an object; 
 * we can reassign it and this also goes for nested objects
 */


{
    const user = {firstname: "john", lastname:"doe"};
    console.log(user);

    user.firstname = "_modified";
    console.log(user);

    const upperCaseUser = function(userData){
        userData.firstname = userData.firstname.toUpperCase();
        userData.lastname = userData.lastname.toUpperCase(); 
    }
    upperCaseUser(user);
    console.log(user);
}


{
    const user = {firstname: "ash", lastname:"shik"};

    const upperCaseUser = function(userData){
        let firstname = userData.firstname.toUpperCase();
        let lastname = userData.lastname.toUpperCase();

        return {
            firstname,
            lastname
        };
    }

    const userUpper = upperCaseUser(user);
    console.log("userUpper",userUpper);
    console.log(user);
}


/**
 *  Object.freeze mthod
 * 
 *  Object.freeze() can be used to freeze objects. 
 *  Properties can’t be added, deleted, or changed. The object becomes immutable.
 * 
 *  One issue with Object.freeze is that you don’t affect sub-properties.
 * 
 *  For deep freeze we need to recursively freeze each property of type object 
 */

{
    const person = Object.freeze({ name: "elon",  id: 12345 });

    person.id = 000;
    console.log("person ", person);
    console.log("person object is frozen", Object.isFrozen(person));

    //Immutable Arrays
    const arr = Object.freeze(['a','b','c']);
    arr[0] = 10;
    console.log("arr",arr);

}
