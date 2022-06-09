/** 
 * Pure functions
 * - Predictable
 * - Has no side effects
 * 
 * Impure function
 *  - Unpredictable
 *  - Has side effects
 * 
 *  console is an external API not a JavaScript method.
 */

/** Predictable  */
function add(x,y){
    return x+y;
}
console.log(add(2,3));


/** Unpredictable */
function subtract(x,y){
    let rand = Math.round(Math.random() * 10);
    return (x - y - rand);
}
console.log(subtract(40,2));


/** Side-effects 
 *  function below has side effects
*/
{
    var globalVariable = 1;

    function add(x,y){
        globalVariable = 0;
        return x + y + globalVariable;
    }
    console.log(add(10,2));
}


