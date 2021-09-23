const { whatForDinner } = require('./practice/library-practice')

//native promise
function nativePromise() {
    whatForDinner().then(meal => {
        console.log(`I'm going to make ${meal} for dinner.`);
    });
}

// nativePromise();
//async wait version:
const asyncVersion = async () => {
    let resolvedValue = await whatForDinner();
    console.log(`I'm going to make ${resolvedValue} for dinner.`);
};

asyncVersion();
