const { checkInventory } = require('./library(module).js')

const order = [
    ['sunglasses', 1],
    ['pants', 1]
];

checkInventory(order).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
