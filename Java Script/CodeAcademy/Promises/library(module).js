const inventory = {
    sunglasses: 1,
    pants: 1,
    bags: 200
};



const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let instock = order.every(item => inventory[item[0]] >= item[1]);
            if (instock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some item are sold out.`);
            }
        }, 1000);
    });
};

module.exports = { checkInventory };

