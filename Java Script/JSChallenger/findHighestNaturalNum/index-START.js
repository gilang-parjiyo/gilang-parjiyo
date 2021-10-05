// My Solution
{
    function myFunction(x, y) {
        if (x % y === 0) {
            return x;
        } else {
            return myFunction(x + 1, y)
        }
    }
}


// Author solution
{
    function myFunction(x, y) {
        while (x % y !== 0) x++;
        return x;
    }
}