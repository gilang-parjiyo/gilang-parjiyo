let user = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryOneUsed(userObj) {
    let nameUser = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
    return nameUser.every(name => userObj.hasOwnProperty(name)); // array every method untuk mengecek semua properties, hasOwnProperty mengecek properties ada
}

console.log(isEveryOneUsed(user));

function isEveryOneUsed2(Obj) {
    let nameUser = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
    return nameUser.every(name => name in Obj)
}

console.log(isEveryOneUsed2(user));