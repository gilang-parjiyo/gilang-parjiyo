const { shopBeans, soakTheBeans, cookTheBeans } = require('./library');
async function beanProcess() {
    let shop = await shopBeans();
    // console.log(shop);
    let soak = await soakTheBeans(shop);
    // console.log(soak);
    let cook = await cookTheBeans(soak);
    console.log(cook);
}

beanProcess();