function titleCase(string) {
    let str = '';
    string = string.split(' ').forEach(element => {
        element = element.replace(element, element.toLowerCase());
        element = element.replace(element[[0]], element[0].toUpperCase());
        str = str + element + ' ';
    });
    str = str.slice(0, str.length - 1)
    return str;
}
console.log(titleCase(`HERE IS MY HANDLE HERE IS MY SPOUT`));
