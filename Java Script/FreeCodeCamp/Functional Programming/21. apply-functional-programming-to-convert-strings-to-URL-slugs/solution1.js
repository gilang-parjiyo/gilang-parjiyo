function urlSlug(str = url) {
    return str
        .toLowerCase()   
        .trim()   
        .split(/\s+/)  // split with delimeter space one or more space
        .join('-')  // join with delimeter -

}

let url = ' Winter Is  Coming ';

console.log(urlSlug(url));