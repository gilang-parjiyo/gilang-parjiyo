function Animal(){}

Animal.prototype = {
    constructor: Animal,
    eat() {
        console.log(`nom nom nom`);
    }
};

let duck = Object.create(Animal.prototype);

duck.eat();