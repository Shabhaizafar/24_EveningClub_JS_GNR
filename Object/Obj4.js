// 5. Implement a check and manipulation of an object's properties: if a property exists, delete it; if not, add it with a default value.

// var obj = {
//     fname :"Raj",
//     lname :"Patel",
//     Age : 13
// };
// var n = "Gender";
// var flag = 1;
// for (const key in obj) {
//     if(key==n)
//     {
//         delete obj[key];
//         flag = 0;
//     }
// }
// if(flag)
// {
//     obj[n] = undefined;
// }
// console.log(obj);

// if (Object.hasOwnProperty.call(obj, n)) {
//     delete obj[n];
// }
// else{
//     obj[n]= "temp";
// }
// console.log(obj);

///////////////////////////////////////////
// - Objects inside Array.

// let people = [
//     { name: 'John', age: 30, occupation: 'Developer' },
//     { name: 'Jane', age: 25, occupation: 'Designer' },
//     { name: 'Sam', age: 35, occupation: 'Manager' }
// ];

// console.log(people);
// console.log(...people);
// console.log(...people);

// for (const iterator of people) {
//     for (const key in iterator) {
//         console.log(`${key} : ${iterator[key]}`);
//     }
// }



// let people = [
//     1,
//     { name: 'John', age: 30, occupation: 'Developer' },
//     { name: 'Jane', age: 25, occupation: 'Designer' },
//     5,
//     { name: 'Sam', age: 35, occupation: 'Manager' }
// ];


// for (const iterator of people) {
//     if(typeof(iterator)=='object')
//     {
//         for (const key in iterator) {
//             console.log(key);
//         }
//     }
//     else{
//         console.log(iterator);
//     }
// }




/////////////////////////////////////////////
let people = [
    { name: 'Pratham', age: 30, occupation: 'Developer' },
    { name: 'Jane', age: 25, occupation: 'Designer' },
    { name: 'Sam', age: 35, occupation: 'Manager' }
];


//output
// let people = [
//     { name: 'Jane', age: 25, occupation: 'Designer' },
//     { name: 'John', age: 30, occupation: 'Developer' },
//     { name: 'Sam', age: 35, occupation: 'Manager' }
// ];


var temp;
for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people.length; j++) {
        if(people[i].age<people[j].age)
        {
            temp = people[i];
            people[i] = people[j];
            people[j] = temp;
        }
    }
}
console.log(...people);



// let people = [
//     { name: 'Jane', age: 25, occupation: 'Designer' },
//     { name: 'Pratham', age: 30, occupation: 'Developer' },
//     { name: 'Sam', age: 35, occupation: 'Manager' }
// ];