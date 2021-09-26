function whatIsInAName(collection = collections, source = sources) {
    let sourceKey = Object.keys(source);

    return collection.filter(obj => {
        return sourceKey.map(key => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        }).reduce((a, b) => { return a && b })
    });
}

let collections = [
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 }
]
let sources = { "apple": 1, "cookie": 2 }


console.log(
    whatIsInAName(
        collections, sources
    )
);