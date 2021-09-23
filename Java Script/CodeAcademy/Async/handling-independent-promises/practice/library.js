const cookBeans = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Beans'), 1000);
    });
};

const steamBroccoli = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Brocolli'), 1000);
    });
};

const cookRice = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Rice'), 1000);
    });
};

const bakeChicken = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Chicken'), 1000);
    });
};

module.exports = { cookBeans, steamBroccoli, cookRice, bakeChicken };

