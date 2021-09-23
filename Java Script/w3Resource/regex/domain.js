function checkDomain(domain) {
    let regex = /^[a-z0-9]+([\.\-]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;
    if(regex.test(domain)){
        console.log('true');
    } else {
        console.log('false');
    }
}

checkDomain('www-gilang.com');

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|$\s+/; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

console.log(result)