// explicit coercion
{
    var a = "42";

    var b = Number(a);

    console.log(a); // "42"
    console.log(b); // 42 the number
}

// implicit coercion

{
    var a = "42";

    var b = a * 1;

    console.log(a); // "42"
    console.log(b); // 42 the number

}