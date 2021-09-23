function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat() { console.log('Cop cop cop') }
}

function Dog(name) {
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

let duck = new Dog('Heli');

duck.eat()