function laughItOff(num) {
    var laugh = '';
    for (var i = num; i > 0; i--) {
        laugh += 'ha';
    }
    return laugh + '!';

}

console.log(laughItOff(4));