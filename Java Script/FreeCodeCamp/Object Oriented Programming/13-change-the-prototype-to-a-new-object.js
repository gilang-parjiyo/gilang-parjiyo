function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    eat() { console.log(`nom nom nom`) },
    describe() { console.log(`Hello my name is ${this.name}`) },
}

let myDog = new Dog('Heli');
myDog.eat();