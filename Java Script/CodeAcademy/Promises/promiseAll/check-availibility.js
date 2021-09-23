const checkAvailibility = (item, distributor) => {
    console.log(`Checking availibility of ${item} at ${distributor}...`) // create log start proses checking;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) { // invoke func restockSuccess
                console.log(`${item} are in stock in ${distributor}`); //
                resolve(item);
            } else {
                reject(`Error: ${item} is unavailable in ${distributor}`);
            }
        }, 1000);
    });
};

// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > .5);
}

module.exports = { checkAvailibility };