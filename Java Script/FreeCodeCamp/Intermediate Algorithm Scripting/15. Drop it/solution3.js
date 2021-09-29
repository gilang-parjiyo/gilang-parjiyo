/*jshint esversion: 6 */
function dropElements(arr = [], func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

console.log(
    dropElements([1, 2, 3, 4], function (n) {
        return n >= 5;
    }));

/* 
method use :
array.slice
array.findIndex

Take away :
- arr.slice(): selalu berpikir sebaliknya bukan hanaya untuk memotong.
- arr.slice(): jika tidak ditentukan endslicenya akan memotong sampai akhir.
- cari tahu edge case yang mungkin terjadi.

Code Flow :
- cari index item yang true findIndex();
    - edge case jika index tidak ditemukan -1 tidak bisa digunakan di slice
- dropElement dengan slice jika element <= 0;
*/