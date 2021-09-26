function whatIsInAName(collection = collections , source = sources) {
    let sourceKey = Object.keys(source); //* 1
    return collection.filter(obj => { //* 2
        return sourceKey.every(key => { //* 3
            return obj.hasOwnProperty(key) && obj[key] === sou[key]; //* 4
        });
    });
}


let collections = [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
]
let sources = { last: "Capulet" }


console.log(
    whatIsInAName(
        collections, sources
    )
);