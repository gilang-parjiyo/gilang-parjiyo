function truthCheck(collection, pre) {
    let status;
    for (let userData in collection) {
        if (collection[userData][pre]) {
            status = true;
        } else {
            return false;
        }
    }
    return status;
}

console.log(
    truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")
);