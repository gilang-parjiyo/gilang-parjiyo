function sumFibs(num = 0) {
    let newArr = [];
    let fiboNum = 0;
    for (let i = 0; i < num; i++) {
        newArr = newArr.concat(i);
    }
    newArr.forEach((elem, index) => {
        if (index < 2) {
            fiboNum = elem;
        } else {
            fiboNum = newArr[newArr.length -1] + newArr[newArr.length-2]
        }
    });
    return fiboNum;
}

console.log(
    sumFibs(10)
);

/*
0,1,2,3,4

*/