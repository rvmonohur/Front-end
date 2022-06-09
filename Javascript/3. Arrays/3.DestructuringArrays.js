
/** Basic destructuring */
let numbers = [1,2,3];

let [num1,num2,num3,num4] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);  //undefined


/** Skipping items in an array */ 
let [num5,, num7] = [5,6,7]
console.log("num5 ", num5);
//console.log("num6 ", num6);
console.log("num7 ", num7);


/** */
function getScores(){
    return [70,80,80,100];
}

{
    let [x,y,z] = getScores();
    console.log(x); // 70
    console.log(y); // 80
    console.log(z); // 90
}

/**  */
{
    let [x,y,...args] = getScores();
    console.log(args);


    let planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
    let [first, , third, ...others] = planets;

    console.log("first ", first);
    console.log("others ", others);
}


/** Setting default values */
{
    let [num1 = 10, num2 = 20 ] = [999];
    console.log(num1);
    console.log(num2);
}

{
    function getItems(){
        return null;
    }

    let [a = 11 , b = 22] = getItems() || [];

    console.log(a);
    console.log(b);
}


/** Nested array destructuring */
{
    function getProfile(){
        return [
            'John',
            'Doe',
            ['Red','Green','Blue']
        ];
    }

    let [firstName, lastName, [color1,color2,color3]] = getProfile();

    console.log(firstName, color1);
}