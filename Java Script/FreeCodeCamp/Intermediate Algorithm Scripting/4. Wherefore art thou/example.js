function diffArray(arr1 = [], arr2 = []) {
    var newArr = [];
/* this is block comment */
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }
    
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}
let arr1 = [1, 2, 3, 7, 5]
let arr2 = [1, 2, 3, 4, 5]

    console.log(

// 

/* this is block comment */

diffArray(arr1, arr2)


// diffArray(arr1, arr2)


    {

    }
            {

    }
    // diffArray(arr1, arr2) 

    // diffArray(arr1, arr2) 
);