async function firstFunc(num) {
    return num;
}

async function secondFunc(num) {
    return `${num} mulitple ${num} is ${num * num}`
}

async function usingTryCatch() {
    try {
        let value1 = await firstFunc(5);
        let value2 = await secondFunc(value1);
        console.log(value2);
    } catch (error) {
        console.log(error);
    }
}

// usingTryCatch();

const usingRejectPromise = usingTryCatch();

usingRejectPromise.catch((rejectValue) => console.log(rejectValue));

