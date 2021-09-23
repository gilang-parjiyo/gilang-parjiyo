/**
 * 
 */

function largestOfFour(arr) {
    let result = []; // inialize result array 
    for (let i = 0; i < arr.length; i++) { // iterate array level 1 [[][]...] 
        let largestNumber = arr[i][0];  // set first item in array level 1 as comparasion.
        for (let j = 1; j < arr[i].length; j++) { // iterate array level 2 [...]
            if (largestNumber < arr[i][j]) largestNumber = arr[i][j]; // compare largestnumber with other item in array and set them as largest number if true
        }
        result[i] = largestNumber; // set largest number in result according to index
    }
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));