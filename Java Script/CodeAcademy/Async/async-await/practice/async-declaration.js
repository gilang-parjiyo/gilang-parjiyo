async function myfunc() {
    return 'async function';
}

myfunc()
    .then(resolvedValue => {
        console.log(resolvedValue); // print promise with resolved value 'async function'
    })