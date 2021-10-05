/* 
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

// SOLUTION WHILE
{
    const addUpp = (num) => {
        let iterator = 1;
        let addNum = num;
        while (iterator < num) {
            addNum += iterator;
            iterator++;
        }
        return addNum;
    }
}

// Sum of n natural number = n * (n + 1) / 2.
{
    const addUp = (num) => {
        return (num * (num + 1)) / 2;
    }
    
}

// SOLUTION RECRUSSION
{
    const addUp = (num) => {
        return (num === 1) ? 1 : num + addUp(num - 1);
    }

}

// SOLUTION REDUCE
{
    const addUp = (num) => {
        return Array.from({ length: num + 1 }, (v, i) => i)
            .reduce((a, b) => a + b);
    }
    addUp(5);
    module.exports = addUp
}



