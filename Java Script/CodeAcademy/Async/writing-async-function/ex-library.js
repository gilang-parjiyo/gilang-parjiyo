const firstPromises = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('first promises'), 1000);
    });
};

const secondPromises = firstPromises => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${firstPromises} is done and second Promises also done`), 1000);
    });
};

function nativePromiseVersion() {
    firstPromises()
        .then((firstValue) => {
            console.log(firstValue);
            return secondPromises(firstValue);
        })
}
nativePromiseVersion();

async function asyncVersion() {
    let firstValue = await firstPromises();
    console.log(`First value is: ${firstValue}`);
    let secondValue = await secondPromises(firstValue);
    console.log(`Second value is: ${secondValue}`);
}

// asyncVersion();