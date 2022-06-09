
{
    const student = {
        id: 1610282,
        name: 'Pulisic',
        hobby: {
            fulltime: "programming",
            parttime: "fishing"
        },
        age: function(){
            return 20;
        }(),

        //
        greet : function(){
            console.log(`Hello ${this.name}`);
        }
    }
    console.log("student",student);
    student.greet();
}

/**
 *  Object initialization from variables
 */

{
    let movieName = "Spider-man";
    let cast = "Tom Holland";

    const movie = {
        Name: movieName,
        Cast: cast
    }

    console.log(movie);
}

/**
 *  Shorthand property name syntax for object creation
 */
{
    let activity = "Surfing";
    const beach = {activity}

    console.log(beach); //{ activity: 'Surfing' }
}


