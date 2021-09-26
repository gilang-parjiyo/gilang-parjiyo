function whatIsInName(collection = arg1, source = arg2) {
    var sourceKey = Object.keys(source); //* return array of source keys
    return collection.filter(item => {
        for (let i = 0; i < sourceKey.length; i++) {
            if (
                !item.hasOwnProperty(sourceKey[i]) ||
                item[sourceKey[i]] !== source[sourceKey[i]]
            ) {
                return false;
            }
        }
        return true;
    })
}

var arg1 = [
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 }
]

var arg2 = { "apple": 1, "cookie": 2 }

console.log(
    whatIsInName(
        arg1, arg2
    )
);