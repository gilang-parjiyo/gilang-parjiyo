function falsyBouncer(arr) {
    let newArr = []; // create new array for hold value boolean true
    for (let i in arr) { // iterate array 
        if(arr[i]) newArr.push(arr[i]); // if value array boolean true push to newArray
    }
    return newArr;
}

console.log(falsyBouncer([7, "ate", "", false, 9]));