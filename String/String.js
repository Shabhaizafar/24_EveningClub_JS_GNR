//What is a String : 
    // - Collection of Multiple Char.
    // - String is not an Array . But it's Similar.


// Using Double Quote
// var Str1 = "Royal"; 
// console.log(Str1);


// //Using Single Quote
// var Str2 = 'Techno';
// console.log(Str2);

// //Using Back-tick
// var Str3 = `Soft`;
// console.log(Str3);

//legth    12345
// var str = "Royal Technsoft P Ltd";
// //index    01234
// console.log(str);
//             //index
// console.log(str[4]);

// //String Method
// // 1) length 
// console.log(str[str.length-1]);
////////////////////////////////////////////////////
// var str = "                 Royal Technsoft P Ltd             ";
// console.log(str);

//1) str.charAt
// console.log(str[10]);
// console.log(str.charAt(10));

//2) str.charCodeAt
// console.log(str.charCodeAt(5));

//3) str.concat
// console.log(str.concat(str,str,"Zafar"));

//4) str.includes
// console.log(str.includes(' t'));

//5) str.indexOf
// console.log(str.indexOf('oh'));

//6) str.lastIndexOf
// console.log(str.lastIndexOf('o'));

//7) str.replace
// console.log(str.replace('Tech',"TECH"));
// console.log(str.replaceAll('Tech',"TECH"));

//8) str.startsWith
// console.log(str.startsWith("r"));
//9) str.endsWith
// console.log(str.endsWith("Ltd"));


//10) str.toLowerCase
// console.log(str.toLowerCase());

//11) str.toUpperCase
// console.log(str.toUpperCase());

// str.trim
// console.log(str.trim())
// str.trimEnd
// console.log(str.trimEnd())

// str.trimStart
// console.log(str.trimStart())

// /30-04-2024/
// var str = "Royal Technosoft p ltd";
// console.log("Main String : ",str);
// str.split  // covert in an Array
// console.log(str.split());
// console.log(str.split(''));
// console.log(str.split(' '));
// console.log(str.split('o'));


// str.slice
        // 1) starting point(index)  2) ending point(index)
// console.log(str.slice(10,6));
// // str.substring
//         // starting point(index)  and  ending point(index)
// console.log(str.substring(10,6));
// console.log(str.substring(6,10));


// str.substr 
                //1) starting point (index)  2) length
// console.log(str.substr(6,10));


////////////////////////////////////

var fname = "Raj";
var lname = "Patel";
var Age = 10;

console.log("My name is Raj Patel.and i am 10 year old.");


// console.log("My name is",fname,lname,".and i am",Age,"year old.");
// console.log("My name is "+fname,lname+".and i am",Age,"year old.");

//String Template

console.log(`My name is ${fname} ${lname}.and i am ${Age} year old.`);