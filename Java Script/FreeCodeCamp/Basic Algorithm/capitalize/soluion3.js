function titleCase(str) {
    str = str.toLowerCase().split(' '); //make entire string lowercase then convert to array.
    let newArr = str.map(value => { // create new array
        return value.replace( // function replace 
            value.charAt(0), value.charAt(0).toUpperCase()); // replace first character to upper case

    })
    return newArr.join(' '); // convert array to string separated by spaces

}

console.log(titleCase('Jodsfasd Makan malam'));