let dog = {
    name: 'Spot',
    numLegs: 4,
    saysLegs() {
        return `This dog has ${this.numLegs} legs`;
    }
}

console.log(dog.saysLegs());