/**
 * A JavaScript function that returns an object is known as a factory function. 
 * 
 * Factory functions often accept parameters in order to customize the returned object.
 * 
 */


 const dogFactory = (name, age, breed) => {
    return {
      name: name,
      age: age,
      breed: breed,
      bark() {
        console.log('Woof!');  
      }
    };
  };

  console.log(dogFactory("rocky",1,"GSD"));
  let dog =  dogFactory("rocky",1,"GSD");
  dog.bark();


  