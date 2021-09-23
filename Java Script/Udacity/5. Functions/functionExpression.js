var catSays = function (max) { // function keyword no longer has name.
    catMessage = '';
    for (var i = 0; i < max; i++) {
        catMessage += 'Meow '
    }
    return catMessage
}

console.log(catSays(3));