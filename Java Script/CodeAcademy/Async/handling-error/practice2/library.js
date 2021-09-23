const randomSucces = () => {
    let random = Math.random();
    if (random < .5) {
        return true;
    } else {
        return false;
    }
};

const cookBeanSoufle = () => {
    return new Promise((resolve, reject) => {
        console.log(`Fingers crossed... Putting the Bean Souffle in the oven`);
        let success = randomSucces();
        setTimeout(() => {
            if (success === true) {
                resolve(`Bean Souffle served`)
            } else {
                reject(`Dinner is ruined`)
            }
        }, 1000);
    });
};

module.exports = {cookBeanSoufle};