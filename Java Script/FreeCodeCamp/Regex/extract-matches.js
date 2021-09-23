let groupName = 'Fromis_9 first winning music show!';
let regWords = /winning|music/;

let findReg = groupName.match(regWords);
console.log(findReg);
/*
[
  'winning',
  index: 15,
  input: 'Fromis_9 first winning music show!',
  groups: undefined
]
Hanya regex awal yang di extract
*/