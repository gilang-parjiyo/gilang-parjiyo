const myPromise = () => {
    return new Promise((resolve) => {
        setTimeout(()=> resolve('Yeay resolved'), 1000);
    });
}

const await = async() => {
    let value = await myPromise();
    console.log(value);
}

const noAwait = async() => {
    let value = myPromise();
    console.log(value);
}

await();
noAwait();


// const myPromise = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve('Yeay resolved'), 1000);
//     });
// };

// async function noAwait() {
//     let value = myPromise();
//     console.log(value);
// }

// async function await() {
//     let value = await myPromise();
//     console.log(value);
// }

// noAwait();
// await();