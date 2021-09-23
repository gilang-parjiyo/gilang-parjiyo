function Birds() {
    let weight = 15; // properties protected by closure

    this.getWeight = () => {
        return weight; // create new method to access protected properties
    };
}

let woody = new Birds;

console.log(woody.getWeight());

