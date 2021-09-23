{
    var a = "42";
    var b = 42;

    console.log(a == b);
    console.log(a === b);
}

{
    var c = [1, 2, 3];
    var d = [1, 2, 3];
    var e = "1,2,3";

    console.log(c == e);  //true "array c convert to string"
    console.log(d == e);  //true "array d convert to string"
    console.log(c == d);  //false
}
