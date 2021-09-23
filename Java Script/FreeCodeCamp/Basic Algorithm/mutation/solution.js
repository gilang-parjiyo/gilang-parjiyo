function mutation(arr = [],) {
    let test = arr[0].toLowerCase(); // convert item array index 0 to lowercase andhold in variable test.
    let target = arr[1].toLowerCase(); // convert item array index 1 to lowercase and hold in variable target
    for (let i = 0; i < test.length; i++) { // iterate to test 
        if (target.indexOf(test[i]) < 0) return false;  // find indexof target found in value test or not if not return false
    }
    return true;
}

console.log(mutation(['makan', 'malam']));