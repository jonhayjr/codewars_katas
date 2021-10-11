/* https://www.codewars.com/ - Convert string to camel case:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). */

function toCamelCase(str){
    //Create new array of string words.  Replace underscores and dashes with spaces and split by spaces
    const newString = str.replace(/-/g, ' ').replace(/_/g, ' ').split(' ');

    //Loop through array starting with 2nd word.
    for (let i = 1; i < newString.length; i++) {

        //Check if first letter of word is lowercase and replace with uppercase
        if (newString[i].charAt(0).toLowerCase()) {
            newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].substring(1)
        }
    }

    //Return new word joined on space and then replace space with nothing
    return newString.join(' ').replace(/ /g, '');
}

console.log(toCamelCase('A-B-C'))