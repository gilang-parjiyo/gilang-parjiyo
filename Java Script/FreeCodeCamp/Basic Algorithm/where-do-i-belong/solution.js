function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b); // sort ascending
    let index = arr.findIndex(element => element >= num); // find index element
    return index === -1 ? arr.length : index; //jika resultnya index -1 return panjang array
}
console.log(getIndexToIns([1,2], 20))