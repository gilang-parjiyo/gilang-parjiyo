// function Cat(name) {
//     this.name = name;
// }

// Cat.prototype = {
//     constructor: Cat,
//     eat: function () {
//         console.log("nom nom nom");
//     }
// };

// function Bear(name) {
//     this.name = name;
// }

// Bear.prototype = {
//     constructor: Bear,
//     eat: function () {
//         console.log("nom nom nom");
//     }
// };

// function Animal() { }

// Animal.prototype = {
//     constructor: Animal,

// };

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat() {
        console.log(`nom nom nom`);
    }

};