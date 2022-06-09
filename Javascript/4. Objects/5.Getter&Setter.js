{
    const person = {

        _name: "johny",

        get Name(){
            return this._name
        },

        set Name(newName){
            this._name = newName
        }
    }

    console.log(person.Name);
    person.Name = "ricky";
    console.log(person.Name);
}



