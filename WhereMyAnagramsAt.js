/* https://www.codewars.com/ - Where are my anagrams at
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.
*/
function anagrams(word, words) {
    //Put letters in word in alphabetical order
    const wordAlphabetic = word.split('')
                               .sort()
                               .join('');
    //Array to store anagram
    const anagramArray = [];

    //Loop through each word in the array
    words.forEach(w => {
        //Put letters in each word in alphabetical order
        const wAlphabetic = w.split('')
                             .sort()
                             .join('')

        //Check if alphabetized word contains alphabetized array word.  If so, push to anagram array.
        if (wordAlphabetic.indexOf(wAlphabetic) >= 0) {
            anagramArray.push(w);
        }
    })

    //Return anagram array
    return anagramArray;
}

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))