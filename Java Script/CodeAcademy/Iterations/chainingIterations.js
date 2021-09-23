const products = [

    // Here we create an object and each
    // object has a name and a price
    { name: 'dress', price: 600 },
    { name: 'cream', price: 60 },
    { name: 'book', price: 200 },
    { name: 'bottle', price: 50 },
    { name: 'bedsheet', price: 350 }
];

//Chaining iteration filter and map;
const filtered = products.filter(product => product.price < 100); //filter product with price less than 100 
const sale = filtered.map(product => {
    return `The price of ${product.name} is ${product.price}` // create new array from data variable filtered
});

console.log(sale);

//Quicker way of chaining iterations

const fastSale = products
    .filter(product => product.price < 100)
    .map(product => `The price of ${product.name} is ${product.price}`);
console.log(fastSale);

