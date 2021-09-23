var inputAnim = ['Tiger', 'Zebra', 'Giraffe', 'Cat', 'Rabbit'];

function sliceArray(arr, start, end) { 
    return arr.slice(start, end); // slice array from index start to index end
}

console.log(
    sliceArray(inputAnim, 1, 2)
);