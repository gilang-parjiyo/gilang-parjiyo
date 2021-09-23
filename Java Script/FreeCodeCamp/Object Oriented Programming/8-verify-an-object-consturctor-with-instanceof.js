function House(numBeds) {
    this.numBeds = numBeds;
}

let myHome = new House(4);

console.log(myHome instanceof House);
