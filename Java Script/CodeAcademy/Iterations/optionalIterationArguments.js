const lower = ['a', 'b', 'c', 'd', 'e', 'f']
const upper = [];

lower.forEach(function (x) {
    this.push(x.toUpperCase());
}, upper);
console.log(upper);
//
lower.forEach(function (x, i) {
    this[i] = x.toUpperCase()
}, upper)
console.log(upper)