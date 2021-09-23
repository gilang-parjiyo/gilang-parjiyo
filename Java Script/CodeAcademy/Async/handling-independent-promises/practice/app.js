const { bakeChicken, cookRice, cookBeans, steamBroccoli } = require('./library.js');

//async independent promise
async function serveDinnerConcurrent() {
    const bakeChickenPromise = bakeChicken();
    const cookRicePromise = cookRice();
    const cookBeansPromise = cookBeans();
    const steamBroccoliPromise = steamBroccoli();
    console.log(`Dinner is served. We're having ${await bakeChickenPromise}, ${await cookRicePromise}, ${await cookBeansPromise} and ${await steamBroccoliPromise}`);
}

// serveDinnerConcurrent();

async function serveDinnerWaiting() {
    const bakeChickenPromise = await bakeChicken();
    const cookRicePromise = await cookRice();
    const cookBeansPromise = await cookBeans();
    const steamBroccoliPromise = await steamBroccoli();
    console.log(`Dinner is served. We're having ${bakeChickenPromise}, ${cookRicePromise}, ${cookBeansPromise} and ${steamBroccoliPromise}`);
}

// serveDinnerWaiting();

async function serveDinnerAgain(){
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
    console.log(`Dinner is served. We’re having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
  }
  
  serveDinnerAgain();
