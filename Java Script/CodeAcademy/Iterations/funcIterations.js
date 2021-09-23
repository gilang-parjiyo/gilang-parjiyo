let menus = ['ayam', 'tempe', 'tahu', 'ikan'];
const funcMenu = menu => {
    return menu;
};

const newMenu = menus.map(funcMenu);
console.log(newMenu);