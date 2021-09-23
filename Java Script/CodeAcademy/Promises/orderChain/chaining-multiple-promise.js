
// import { order } from "./order-chain";
const store = {
    sunglasses: {
        inventory: 817,
        cost: 9.99
    },
    pants: {
        inventory: 236,
        cost: 7.99
    },
    bags: {
        inventory: 17,
        cost: 12.99
    }
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemsArr = order.items;
            let instock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
            if (instock) {
                let total = 0;
                itemsArr.forEach(item => {
                    total += item[1] * store[item[0]].cost;
                });
                console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
                resolve([order, total]);
            } else {
                reject(`The order could not be completed because some items are sold out.`);
            }

        }, generatedRandomDelay());
    });
};

const processPayment = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let hasEnoughMoney = order.giftCardBalance > total;
            console.log(order.giftCardBalance);
            if (hasEnoughMoney) {
                // For simplicity we've omited a lot of functionality
                // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
                console.log(`Payment processed with giftcard. Generating shipping label.`);
                let trackingNum = generateTrackingNumber();
                resolve([order, trackingNum]);
            } else {
                reject(`Cannot process order: giftcard balance was insufficient.`);
            }
        }, generatedRandomDelay());
    });
};

const shipOrder = (responseArray) => {
    const order = responseArray[0];
    const trackingNum = responseArray[1];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
        }, generatedRandomDelay());
    });
};

// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number

function generateTrackingNumber() {
    return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time

function generatedRandomDelay() {
    return Math.floor(Math.random() * 2000);
}

module.exports = { checkInventory, processPayment, shipOrder };

const arrStore = Object.entries(store);
