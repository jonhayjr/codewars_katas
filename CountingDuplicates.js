/* https://www.codewars.com/ - Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
    //Convert text to lowercase so that it is case insensitive
    const lowercaseText = text.toLowerCase();

    //Create new array of letters without duplicates
    const lettersArrayWithoutDuplicates =  lowercaseText.split('')
                                       .filter((value, index, array) => {
                                            return array.indexOf(value) === index;
                                        })
     
    //Create letter counts object that stores letter and count
    const letterCounts = lettersArrayWithoutDuplicates.map(letter => {
                                return {letter, count: 0}
                            })
    
    //Loop though each letter in lowercaseText
    lowercaseText.split('')
        .forEach(l => {
        const index = letterCounts.findIndex(x => x.letter === l);
        //If letter exists, add 1 to count in object
        if (index >= 0) {
            letterCounts[index].count += 1
        }
    })

   //Create new array of letters with count greater than 1
   const moreThanOnce = letterCounts.filter(l => l.count > 1);

   //Return length of array
   return moreThanOnce.length;
   
}

duplicateCount('aabbcde')