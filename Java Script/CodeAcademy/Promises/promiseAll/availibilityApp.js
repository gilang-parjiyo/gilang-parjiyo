const { checkAvailibility } = require('./check-availibility');

const onFulfill = (itemArray) => {
    console.log(`Item checked: ${itemArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectReason) => {
    console.log(rejectReason);
};

const checkSunglasses = checkAvailibility('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailibility('pants', 'Favorite Supply Co.');
const checkBags = checkAvailibility('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject);