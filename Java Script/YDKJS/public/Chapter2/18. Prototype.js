{ // fallback prototype.
    var foo = {
        a:42
    };

    //create `bar` and link it to `foo`
    var bar = Object.create( foo);

    bar.b = "Hello World"
    
    console.log(bar.b);  //"hello world"
    console.log(bar.a);  //42 <--- delegated to `foo`
}