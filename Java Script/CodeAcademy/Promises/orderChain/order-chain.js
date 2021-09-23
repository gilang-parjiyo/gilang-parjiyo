const { checkInventory, processPayment, shipOrder } = require('./chaining-multiple-promise');

const order = {
  items: [['sunglasses', 100], ['bags', 2]],
  giftCardBalance: 79.82
};

// export {order};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

