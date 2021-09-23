function hexaColor(code) {

    let regex = /^#?[0-9a-fA-f]{3}$|[0-9a-fA-f]{6}$/;

    if (regex.test(code)) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}

hexaColor('#AAAAAA')