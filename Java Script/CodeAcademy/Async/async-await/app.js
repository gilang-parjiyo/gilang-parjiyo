const { brainstormDinner } = require('./library.js');

//Native promise dinner
function nativePromiseDinner() {
    brainstormDinner()
        .then((meal) => {
            console.log(`I am going to make ${meal} for dinner.`);
        });
}

nativePromiseDinner();

//async await version
const anaounceDinner = async () => {
    let resolvedValue = await brainstormDinner();
    console.log(`I am going to make ${resolvedValue} for dinner`);
};

anaounceDinner();