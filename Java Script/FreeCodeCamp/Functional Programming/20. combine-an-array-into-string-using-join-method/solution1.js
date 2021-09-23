function sentensify(str) {
    return str.split(/\W/).join(' '); // split into individual array then join them using join with delimeter (' ')
}

console.log(
    sentensify("May-the-force-be-with-you")
);