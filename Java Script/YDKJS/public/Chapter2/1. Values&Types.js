function log(a) {
    console.log(typeof a)
}

var a;
typeof a;
log(a);  //"undefined"

a = "hello world";
typeof a;
log(a);  //"string"

a = 42;
typeof a;
log(a); //"number"

a = true;
typeof a;
log(a); //boolean

a = null;
typeof a;
log(a); //object

a = undefined;
typeof a;
log(a); //"undefined"

a = { b: "c" };
typeof a;
log(a); //"object"