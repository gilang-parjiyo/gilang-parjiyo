function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let props in beagle) {
    (beagle.hasOwnProperty(props))
        ? ownProps.push(props)
        : prototypeProps.push(props);
}

console.log(ownProps, prototypeProps);