function cat () {
    console.log(purr());
    // console.log(meow(2));
    var meow = function (max) {
        var catMessage = '';
        for (var i = 0; i < max; i++) {
            catMessage += 'Meow';
        }
        return catMessage
    }
    function purr(){
        return 'purrrr'
    }
}

cat(); // error moew is not a function.