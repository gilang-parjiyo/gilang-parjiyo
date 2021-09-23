function urlSlug(str = urlStr) {
    return str
        .toLocaleLowerCase()
        .split(' ')   // split arraywith delimeter ' ' 
        .filter((item) => item.match(/\w/)) // filter only words 
        .join('-'); // join with delimeter -
}

let urlStr = ' Winter Is  Coming';

console.log(
    urlSlug(urlStr)
);