function dropElement(arr = [], func) {
    const ARR_LEN = arr.length;
    for (let i = 0; i < ARR_LEN; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}

console.log(
    dropElement([1, 2, 3, 4], function (n) { return n >= 3; })
);

/* 
edge case :
- arr.length akan terkurangi setiap iteration.

method use :
- function break 
- shift();

code flow :
- loop array element
    kondisi true : break, false : drop element.

take away
- gunakan break to stop condition
*/