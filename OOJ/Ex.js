// Father  =   Kaleen Bhaiya
// Mother  =   Beena Bhabhi
// Son     =   Munna Tripathi

// empty class (blueprint)
class Main{

}
const Father = (connectedClass) => class extends connectedClass{
    FatherName = "Kaleen Bhaiya";
}
const Mother = (connectedClass) => class extends connectedClass{
    MotherName = "Beena Bhabhi";
}
class MultipleInheritance{
    constructor(s){
        this.superclass = s;
    }
    connect(...classCollections){
            return classCollections.reduce((currentclass,nextclass)=>nextclass(currentclass),this.superclass); 
    }
}
/* 1)    nextclass      = Father
        connetedClass = currentclass
        currentclass   = this.subclass
        this.subclass  = Main

        return nextclass;


    2)  nextclass     = Mother
        connetedClass = currentclass
        currentclass  = Father


        return nextclass;
*/

const combine = (subclass)=> new MultipleInheritance(subclass);


class Child extends combine(Main).connect(Father,Mother){
    SonName = "Munna";
    LastName ="Tripathi";
}

const s1 = new Child();

console.log(s1);



