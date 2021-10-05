// My solution
{
    function myFunction(char, sentence) {
        return sentence.toLowerCase().split('').filter((item) => item === char).length;
    }

}

// Author solution

{
    function myFunction(char, sentence) {
        
        return sentence.toLowerCase().split(char).length - 1;
    }
    console.log(myFunction('h', 'How many times does the character occur in this sentence?'));
}

