function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

let duck = new Bird();
console.log(duck.constructor);
Bird.prototype.constructor = Bird;
console.log(duck.constructor);

let doggy = new Dog();
console.log(doggy.constructor);
Dog.prototype.constructor = Dog;
console.log(doggy.constructor);
