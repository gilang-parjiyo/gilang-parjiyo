function hmtlColorName(arr) {
    let startIndex = 0;
    let amountToDelete = 2;
    let itemInserted = ['DarkSalmond', 'BlanchedAlmond']
    arr.splice(startIndex, amountToDelete, ...itemInserted);
    return arr;
}

console.log(hmtlColorName(
    [
        'DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick'
    ]
));