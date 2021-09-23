function makeLine (length){
    var line = '';
    for ( i =1; i <= length; i++){
        line += '* ';
    }
    return line;
}

makeLine(5);
console.log(makeLine(5));