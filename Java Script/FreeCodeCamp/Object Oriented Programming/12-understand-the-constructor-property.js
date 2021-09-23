function Dog(name) {
    this.name = name;
}

let myDog = new Dog('Heli');

function joinDogFraternity(candidate) {
    return candidate.constructor === Dog ? true : false;
}

console.log(joinDogFraternity(myDog));