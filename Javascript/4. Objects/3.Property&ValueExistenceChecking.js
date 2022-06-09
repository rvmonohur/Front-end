const student = {
    id: 1610282,
    name: 'Pulisic',
    hobby: {
        fulltime: "programming",
        parttime: "fishing"
    }
}

//Accessing non-existent JavaScript properties
console.log(student.studentid);

if(student.id){
    console.log(student);
}

// Get object keys & values
for (let key in student){
    console.log(key , student[key]);
}

console.log(Object.keys(student));

console.log(Object.values(student));

console.log(Object.entries(student));


//check if object has a specific property
console.log(student.hasOwnProperty("id"));
console.log(Object.prototype.hasOwnProperty.call(student,"name"));
console.log(Object.keys(student).includes("id"));