let str = 'makaan-maaakaaaan';
let regX = /a+/g;

let result = str.match(regX);
console.log(result);

/*result
[ 'a', 'aa', 'aaa', 'aaaa' ] //jika character berdampingan akan dianggap satu match
*/