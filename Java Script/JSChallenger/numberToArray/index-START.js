{
    function myFunction(num) {
        let newArr = []
        num.toString().split('').forEach(element => {
            newArr.push(parseInt(element));
        });
        return newArr;
    }
}

{
    function myFunction(num) {

        return num.toString().split('').map(digit => Number(digit))
    }
}

