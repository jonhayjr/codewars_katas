/* https://www.codewars.com/ - Replace With Alphabet Position
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
*/
function alphabetPosition(text) {
    //Alphabet array used to get letter position
    const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const alphabetPositionArray = [];
    
    //Split text parameter into array.  Loop through and check if character exists in string.  If so, push to new array.
     text.split('')
        .forEach(char => {
            //Check if character exists in alphabet array
            if (alphabetArray.indexOf(char.toLowerCase()) >= 0) {
                //Get position and add 1
                let position = alphabetArray.indexOf(char.toLowerCase()) + 1;

                //Push to array
                alphabetPositionArray.push(position);
            };
        })

    //Return array as string
    return alphabetPositionArray.join(' ');
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))