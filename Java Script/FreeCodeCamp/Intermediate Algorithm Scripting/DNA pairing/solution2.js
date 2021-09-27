function pairElement(str = '') {
    let pair = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }
    let pairArr = str.split('')
        .map(item => [item, pair[item]])
    return pairArr;
}

console.log(
    pairElement('ATCGA')
);