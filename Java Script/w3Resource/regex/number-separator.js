function numberSeparator(num = 1) {
    let numPart = num.toString().split();
    numPart[0] = numPart[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    numPart = numPart.join(".")
    console.log(numPart);
}

numberSeparator(10000000)

// num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// return num_parts.join(".");