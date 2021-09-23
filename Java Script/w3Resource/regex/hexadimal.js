function checkHexa(value) {
    let regex = /^[0-9a-fA-F]{6}$/;
    let result = regex.test(value);
    if(result){
        console.log('true');
    } else {
        console.log('false');
    }
}

checkHexa('FFFFFF')