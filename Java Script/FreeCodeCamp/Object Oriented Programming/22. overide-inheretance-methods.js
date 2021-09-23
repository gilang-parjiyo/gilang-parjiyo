function Bird() { }

Bird.prototype = {
    constructor: Bird,
    fly() {
        return `I am flying!`
    }
}

function Penguin() { }

Penguin.prototype = Object.create(Bird.prototype); // inheret constructor from Bird

Penguin.prototype.constructor = Penguin; // reset constructor to Penugin

let penguin = new Penguin();
console.log(penguin.fly()); // method fly still inheret from Bird

Penguin.prototype.fly = () => { return `Alas, this is a flightless bird.` }
console.log(penguin.fly()); // overide method fly with Penguin fly unique method
