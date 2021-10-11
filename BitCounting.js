/* https://www.codewars.com/ - Bit Counting
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
var countBits = function(n) {
    // Program Me
    //Get number in bits and split into array of numbers
    const bitsArray = Number(n).toString(2).split('');

    //Return total of all numbers in bitsArray
    return bitsArray.reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr)
    }, 0);

};

  console.log(countBits(1234))