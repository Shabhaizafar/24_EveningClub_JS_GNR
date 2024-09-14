// - Intro to arrays.
// - Collection of Data with same or Different Data type.
// - Push pop shift unshift.

// var Arr = [];  //Empty Array
// console.log(Arr);
// console.log(typeof Arr); // Object  ->Array


// var Arr = [1,2,3,4,5,6];   //Number Array
// console.log(Arr);


// var Arr = ["Zafar","Royal"];  //String Array
// console.log(Arr);


// var Arr = [1,"Zafar",2,3,"Royal",true,12n]; // Different Data type 
// console.log(Arr);


// const Arr = [11,12,13,14,,15];
//           0   1  2  3..Arr.length-1
// console.log(Arr);

//property : length
// console.log(Arr.length);


//Methods : 
// 1) push() :  add new Value (last index)
// Arr.push(100); //single 
// Arr.push(100,200);//Multiple
// console.log(Arr);


// 2) pop() : remove value  (last index)
// Arr.pop(); //single value remove and always last
// console.log(Arr);

// 3) shift() : remove Value (starting Index)
// Arr.shift(); //single value remove and always starting point
// console.log(Arr);

// 4) unshift() : add new Value (starting index)
// Arr.unshift(100); //single 
// Arr.unshift(100,300,"Zafar"); //Multiple 
// console.log(Arr);


//////////////////////////////////////////////////////

`Don't Try In like this`
// const Arr = [1,2,3,4,5,6,7,8];
// for (let i = 0; i < Arr.length; i++) {
//     if(i==4)
//     {
//         Arr.pop();
//     }
// }
// console.log(Arr);
// const Arr = [1,2,3,4,5,6,7,8];
// console.log(Arr.length);

// //How to Access Specific Index Value : 
// // console.log(Arr[4]);

// //How to demove specific index Value : 
// delete Arr[4];
// console.log(Arr);
// console.log(Arr.length);



/*1. **Basic Operations:**
   - Create an array `numbers` with values `[1, 2, 3]`. Perform `push` to add `4` to the end of the array.
   - Use `pop` to remove the last element from the `numbers` array. Print the array after each operation.
   
2. **Queue Simulation:**
   - Create an empty array `queue`. Use `push` and `shift` to simulate a queue where you add elements `1`, `2`, and `3` in sequence, and then remove them one by one.

3. **Stack Simulation:**
   - Create an empty array `stack`. Use `push` and `pop` to simulate a stack where you push elements `1`, `2`, and `3` onto the stack, and then pop them off one by one.

4. **Insertion and Deletion at the Beginning:**
   - Create an array `letters` with values `['b', 'c']`. Use `unshift` to add `'a'` to the beginning of the array.
   - Use `shift` to remove the first element from the `letters` array.

5. **Array Reversal:**
   - Create an array `original` with values `[1, 2, 3, 4, 5]`. Use `pop` and `unshift` to reverse the elements in place (without creating a new array).

6. **Updating an Array:**
   - Start with an array `names` containing `[ 'John', 'Jane', 'Doe' ]`.
   - Use `push` to add `'Smith'` to the end of the array.
   - Use `pop` to remove the last element of the array.
   - Use `unshift` to add `'Alice'` to the beginning of the array.
   - Use `shift` to remove the first element of the array.

7. **Array Length Changes:**
   - Create an array `fruits` with values `['apple', 'orange', 'banana']`.
   - Use `push` to add `'grape'` to the end of the array.
   - Use `pop` to remove `'grape'` from the array.
   - Use `unshift` to add `'pear'` to the beginning of the array.
   - Use `shift` to remove `'pear'` from the array.
*/



// 1)  with new Array : 

var Arr = [1,2,3,4,5,2,8,4,10];
// var len = Arr.length;
// var Arr2 = [];

// for (let i = 0; i < len; i++) {
//     Arr2.push(Arr.pop());
// }
// console.log(Arr2);



console.log(Arr);
console.log(Arr.reverse());
// 