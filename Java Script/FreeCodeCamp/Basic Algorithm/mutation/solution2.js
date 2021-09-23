function mutation(arr) {
    return arr[1] // access second item of array
        .toLowerCase() // convert to lowercase
        .split('') // split into indiviudal character
        .every(letter => { // every character find the index with index of
            return arr[0].toLowerCase().indexOf(letter) !== -1; // true if found the index or !== -1;
        })
}

console.log(mutation(['bayam', 'ayam']));