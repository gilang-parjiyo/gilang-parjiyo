function Dogs(name) {
    this.name = name;
}

Dogs.prototype.numLegs = 4; // this protoype will applied to all Dogs instance

let beagle = new Dogs('Snoopy');

console.log(beagle.numLegs);