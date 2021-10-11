/* https://www.codewars.com/ - Sum of Digits/Digital Root  
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

function digital_root(n) {
   //Set sum equal to the number parameter
   let sum = n;
   
    //Create array to store numbers
   let numArray = [];

   //Loop through sum whole it is greater than zero;
   while (sum > 9) {
       //Split sum into array of numbers
       numArray = sum.toString().split('');

       //Add all numbers in the array together to get sum.
       sum = numArray.reduce((a, b) => {
           return parseInt(a) + parseInt(b);
       })
   }
   return sum;
}

console.log(digital_root(942));