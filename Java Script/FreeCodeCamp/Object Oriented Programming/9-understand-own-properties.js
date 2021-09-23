function Birds(name) {
    this.name = name;
    this.numOflegs = 2;
}

let canary = new Birds('Tweety');
let ownProps = [];

for (let prop in canary) {
    if (canary.hasOwnProperty(prop)) ownProps.push(prop);
}

console.log(ownProps);