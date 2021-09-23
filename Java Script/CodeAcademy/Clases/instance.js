class Surgeon {
    constructor(name, depatment) {
        this.name = name;
        this.depatment = depatment;

    }
}

const surgeonRomero =  new Surgeon ('Francisco Romero', 'Cardiovascular'); //instance
const surgeonJackson = new Surgeon ('Ruth Jackson', 'Orthopedics'); //instance

console.log(surgeonJackson.name);