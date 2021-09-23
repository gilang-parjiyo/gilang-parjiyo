function reverseString(reverseMe) {
    var reversed = '';
    for (var text = reverseMe.length - 1; text >= 0; text--){
        reversed += reverseMe[text];
    }
    return reversed;
}

console.log(reverseString('joss'));