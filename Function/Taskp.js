// A word or a sentence in some language is called a pangram if all the characters of the alphabet of this language appear in it at least once. Pangrams are often used to demonstrate fonts in printing or test the output devices.
// You are given a string consisting of lowercase and uppercase Latin letters. Check whether this string is a pangram. We say that the string contains a letter of the Latin alphabet if this letter occurs in the string in uppercase or lowercase.
// Input
// The first line contains a single integer n (1 ≤ n ≤ 100) — the number of characters in the string.
// The second line contains the string. The string consists only of uppercase and lowercase Latin letters.
// Output
// Output "YES", if the string is a pangram and "NO" otherwise.
// Examples
// Input
// Copy12
// toosmallword

// Output
// CopyNO

// Input
// Copy35
// TheQuickBrownFoxJumpsOverTheLazyDog

// Output
// CopyYES

// var n = 12;
// var str = "too small word";
// var finalstr = str.split(' ').join('');
// var ans =  str.split(' ').every(
//     (a)=>{   
//         return a[0].charCodeAt()>=64 && a[0].charCodeAt()<=90;
//     }
// );
// if(n==finalstr.length)
// {
//     if(ans)
//         console.log("String is pangram");
//     else
//         console.log("String is not pangram");

// }
// else{
//     console.log("Length Missed Match");
// }
