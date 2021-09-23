let prom = new Promise ((resolve, reject) => {
    let num = Math.random();
    if (num > 5) {
        resolve('Yeay');
    } else {
        reject('Oh nooo');
    }
});

prom.then((resolvedValue) => {
    console.log(resolvedValue);
})
.catch((rejectedValue) => {
    console.log(rejectedValue);
})