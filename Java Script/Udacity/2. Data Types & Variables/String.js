{
    /*
 * Programming Quiz: Favorite Food (2-3)
 */

    /*
     * QUIZ REQUIREMENTS
     * 1. Your code should print a string with your favorite food
     * 2. Your code should have the first character capitalized
     * 3. Your code must have a `console.log()` function
     * 4. Your code should not be empty
     */
    console.log("Tempe");
}

{
    /*
 * Programming Quiz: String Equality for All (2-4)
 *
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `answer`
 * 2. Your code should have "ALL Strings are CrEaTeD equal" on the left side
 * 3. Your code should use `==` comparison operator
 * 4. The comparison should evaluate to true
 * 5. The right side of your expression should match the left side
 */

    // fix the right side of the expression
    var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
    console.log(answer);
}

{
    /*
 * Programming Quiz: All Tied Up (2-5)
 
 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
 * Example : Why couldn't the shoes go out and play?
 * They were all "tied" up!
*/
    var joke = "Why couldn't the shoes go out and play? \nThey were all \"tied\" up!"
        console.log(joke);
}

{
    /*
 * Programming Quiz: Yosa Buson (2-6)
 */
 
/** 
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `haiku`
 * 2. Your code should use string concatenation
 * 3. Your poem should match the famous haiku poem
 * Example Blowing from the west
 * Fallen leaves gather
 * In the east.
 */

var haiku = "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east.";
console.log(haiku);
}

{ // Escaping string
    var quote = "The man whispered, \"please speak to me.\""
    console.log(quote);
}

{ // Special character
    var specialCharacter = "Up up\n\tdown down"
    console.log(specialCharacter);

}

{ //Quiz
    var quiz = "The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster.";
    console.log(quiz);

}

if ("Yes" == "yes"){
    console.log("true");
} else {
    console.log("false");
}

console.log("Yes" == "yes"); // false because case sensitive.
console.log("y" != "Y"); // True not equal because case sensitive.

{ // Internal Working
    // Pick a string. Your string can have any number of characters.
    let myString = "a";

    // Calculate the ASCII value of the first character, i.e. the character at the position 0. 
    var ASCII_value = myString.charCodeAt(0)

    console.log("Value ASCII a : ", ASCII_value);
}

{ //Print character using loops
    let myString = "Udacity";

    for (let i = 0; i < myString.length; i++) {
        console.log(myString.charCodeAt(i));
        
    }

}