class Main{

}

class Person{
    constructor(s){
        this.firstname = s;
    }
}

const All = (subclass) => new Person(subclass);


console.log(All(Main).firstname);

