//implicit coercien in inequality and there is no strict inequality 
{
    var a = 41;
    var b = "42";
    var c = "43";

    a < b;
    b < c;
}


{
    var d = 42;
    var e = "foo";

    d < e; //false "e" coerced to "NaN"
    d > e; //false
    a == b; //false this coul be coerced 42 == NaN or "42" == "foo"
}