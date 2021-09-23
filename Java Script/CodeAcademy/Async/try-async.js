const tryAsync = async (num) => {
    if (num === 0) {
        return 'zero';
    } else {
        return 'not zero';
    }
}

tryAsync(100)
    .then(resolvedValue => {
        console.log(`The number you input is ${resolvedValue}`);
    });