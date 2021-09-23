let dog = {
    name: 'Heli',
    hasLegs: 4,
    saysLegs() {
        return `This dog has ${this.hasLegs} legs`
    }
};

console.log(dog.saysLegs());