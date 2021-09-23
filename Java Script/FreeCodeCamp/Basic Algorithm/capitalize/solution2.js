function titleCase(string) {
    return string.toLowerCase()
        .replace(/(^|\s)\S/g, U => U.toUpperCase());
}
console.log(titleCase(`HERE IS MY HANDLE HERE IS MY SPOUT`));

//
