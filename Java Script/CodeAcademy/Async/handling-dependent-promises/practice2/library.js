const shopBeans = () => {
    return new Promise((resolve, reject) => {
        let beans = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
        setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * 4);
            let beanType = beans[randomIndex];
            console.log(`I bought ${beanType} beans because they were on sale.`);
            resolve(beanType);
        }, 1000);
    });
};

const soakTheBeans = (beanType) => {
    return new Promise((resolve, reject) => {
        console.log(`Time to soak the beans.`);
        setTimeout(() => {
            console.log(`... The ${beanType} beans are softened.`);
            resolve(true);
        }, 1000);
    });
};

const cookTheBeans = (isSoftened) => {
    return new Promise((resolve, reject) => {
        console.log(`Time to cook the beans`);
        setTimeout(() => {
            if (isSoftened === true) {
                console.log(`... The bean are cooked!`);
                resolve(`\n\nDinner is served!`);
            }
        }, 1000);
    });
};

module.exports = { shopBeans, soakTheBeans, cookTheBeans };