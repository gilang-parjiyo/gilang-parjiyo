// mysolution
// {
//     function myFunction(...args) {
//         return args.map((item) => item.replace(/\W/g, ''))
//             .reduce((a, b) => a[0].toUpperCase() + a.slice(1) + b.split('')
//                 .reverse()
//                 .join(''));
//     }
// }

// author solution
// {
//     function myFunction(a, b) {
//         const first = a.split('').map(part => part.replace('%', '')).join('');
//         const second = b.split('').reverse().map(part => part.replace('%', '')).join('');
//         return first.charAt(0).toUpperCase() + first.slice(1) + second
//     }
// }

/* 
myFunction('java', 'tpi%rcs')
Expected
'Javascript'
myFunction('c%ountry', 'edis')
Expected
'Countryside'
myFunction('down', 'nw%ot')
Expected
'Downtown'
*/


