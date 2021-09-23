let prom = new Promise ((resolve, reject) => {
    num = Math.random();
    if (num < .5) {
        resolve('Yeay resolved');
    } else {
        reject('Oh nooo');
    }
});

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectedValue) => {
    console.log(rejectedValue);
};

prom.then(handleSuccess, handleFailure);