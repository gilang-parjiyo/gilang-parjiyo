let statusUser =
{
    Alan: {
        online: true
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
};

function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let user in usersObj) {
        let status = usersObj[user].online;
        if (status == true) {
            count += 1;
        }
    }
    return count;
    // Only change code above this line
}

console.log(countOnline(statusUser));

console.log(statusUser.Alan.online);