function Animals() { }
Animals.prototype = {
    constructor: Animals,
    eat(){
        console.log('nom nom nom');
    }
}

function Dog() { }
Dog.prototype = Object.create(Animals.prototype); // reference Dog prototype to animals prototype

Dog.prototype.constructor = Dog; // reset constructor Dog to dog

Dog.prototype.bark = () => console.log('woof'); // add method to prototype bark after inherita prototype from animal

let Doggy = new Dog(); // create instance of Doggy

Doggy.eat(); // method inhered from Animal
Doggy.bark(); // dog unique method