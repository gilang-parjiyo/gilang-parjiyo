/*
This is the shopForBeans function. It uses a setTimeout() function to simulate a time-consuming asynchronous action. The function returns a promise with a resolved value of a string representing a type of bean. It settles on a random beanType from the beanTypes array using Math.random().
*/

const shopForBeans = () => {
    return new Promise((resolve) => {
        const beans = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
        setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * 4);
            let beanType = beans[randomIndex];
            console.log(`2. I bought ${beanType} beans because they are on sale.`);
            resolve(beanType);
        }, 1000);
    });
};

module.exports = shopForBeans;

// const shopForBeans = () => {
//     return new Promise((resolve) => {
//         const bean = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
//         setTimeout(() => {
//             let randomIndex = Math.floor(Math.random() * 4);
//             let beanType = bean[randomIndex];
//             console.log(`2. I bought ${beanType} beans because they are on sale.`);
//             resolve(beanType);
//         }, 1000);
//     });
// };

// module.exports = shopForBeans;