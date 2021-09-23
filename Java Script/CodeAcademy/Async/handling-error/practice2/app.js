const { cookBeanSoufle } = require('./library');

//async catch

async function dinner() {
    try {
        let value = await cookBeanSoufle();
        console.log(value);
    } catch (error) {
        console.log(error);
        console.log(`Ordering Pizza`);
    }
}

// dinner();


// native catch
async function dinnerNative() {
    let value = await cookBeanSoufle();
    console.log(value);
}

let rejectDinnerNative = dinnerNative();

rejectDinnerNative
    .catch((rejectValue) => {
        console.log(rejectValue);
        console.log(`Ordering Pizza`);
    });

