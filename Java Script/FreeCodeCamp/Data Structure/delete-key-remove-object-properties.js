let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

let expiredFoods = ['oranges', 'plums', 'strawberries'];
for (let i in expiredFoods) delete foods[expiredFoods[i]];

console.log(foods);