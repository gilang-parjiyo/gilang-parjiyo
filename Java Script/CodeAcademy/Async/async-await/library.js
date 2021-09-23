const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
        console.log(`I have to decide what's for dinner...`);
        setTimeout(() => {
            console.log('Should i make salad...?');
            setTimeout(() => {
                console.log(`Should i make ramen...?`);
                setTimeout(() => {
                    console.log(`Should i make eggs...?`);
                    setTimeout(() => {
                        console.log(`Should i make chicken...?`);
                        resolve('bean');
                    })
                }, 1000);
            }, 1000);
        }, 1000);
    });
};

module.exports = { brainstormDinner };