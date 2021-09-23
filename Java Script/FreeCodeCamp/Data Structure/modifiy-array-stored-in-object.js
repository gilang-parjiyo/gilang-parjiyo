let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: "kennethCodesAllDay",
        joinDate: "March 26, 2016",
        organization: "freeCodeCamp",
        friends: ["Sam", "Kira", "Tomo"],
        location: {
            city: "San Francisco",
            state: "CA",
            country: "USA"
        }
    }
};

function addFriend(obj, friend){
    obj.data.friends.push(friend);
    return obj.data.friends;
}

console.log(addFriend(user, 'Gilang'));