//rule awal tidak boleh 666 atau 000 dan nomor pertama cuma sampai 8 - rule tengah tidak boleh 00 rulet akhir tidak boleh 00;
function socmedSecurityNumber(number) {
    let regex = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!00)[0-9]{4}$/;
    let result = regex.test(number);
    return result;
}

console.log(socmedSecurityNumber('899-90-8565'));






















// function is_socialSecurity_Number(str)
// {
//  regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  
//         if (regexp.test(str))
//           {
//             return true;
//           }
//         else
//           {
//             return false;
//           }
// }

// console.log(is_socialSecurity_Number("999-09-5680"));

// console.log(is_socialSecurity_Number("K8V-3Y1"));

