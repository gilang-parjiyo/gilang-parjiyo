function Dog(name) {
    this.name = name;
}

let beagle = new Dog('Heli');
console.log(Dog.prototype.isPrototypeOf(beagle));