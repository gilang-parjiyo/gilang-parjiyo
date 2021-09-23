let userActivity = {
    id: 52345245,
    date: 'January 1, 2021',
    data: {
        totalUser: 24,
        online: 43
    }
};

userActivity.data.online = 45;

console.log(userActivity); // online will change to 45