function Dog(name){
    this.name = name;
}

Dog.prototype = {
    color: 'white',
    eat() {
        console.log(`nom nom nom`);
    }
}

let heli = new Dog('heli');

console.log(heli.constructor === Dog); // return false becausse constructor is not set in prototype

Dog.prototype = {
    constructor: Dog, // set the constructor
    color: 'white',
    eat() {
        console.log(`nom nom nom`);
    }
}

let dogy = new Dog('heli');

console.log(dogy.constructor === Dog); // result true becuase constructor is set in prototlet dogy = new Dog('heli');

console.log(dogy.constructor === Dog); // result true becuase constructor is set in prototype