{// Understanding 
    function makeAdder(x) {
        // parameter `x` is an inner variable

        // inner function `add()` uses `x`, so
        // it has a "closure" over it
        function add(y) {
            return y + x;
        };

        return add;
    }

    /**
     * `plusOne` gets a reference to the inner `add(..)`
     * function with closer over the `x` parameter of
     * the outer `makeAdder(...);
     */
    var plusOne = makeAdder(1);

        /**
     * `plusTen` gets a reference to the inner `add(..)`
     * function with closer over the `x` parameter of
     * the outer `makeAdder(...);
     */
    var plusTen = makeAdder(10);

    plusOne(1);  // 2
    plusTen(10); // 20
    console.log(plusOne(1), plusTen(10));

}

{// Review code
    function makeAdder2(x) {
        
        function add(y) {
            return x + y;
        };

        return add;
    }

    var plusTwo = makeAdder2(2)
    var plusFour = makeAdder2(4)

    plusTwo(2);
    plusFour(4);
    console.log(plusTwo(2), plusFour(4));


}
