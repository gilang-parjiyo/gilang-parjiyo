console.log('This is the frist line in set timeout.js');

const usingSTO = () => {
    console.log("Using Set Time Out delay 2000");
}

setTimeout(usingSTO, 0)

console.log('This is last line in set timeout.js');