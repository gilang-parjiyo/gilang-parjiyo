const tinasFollowers = ['gilang', 'mohandas', 'parjiyo'];
const bobsFollowers = ['gilang', 'mohandas','gara', 'graendy'];
const mutualFollowers = [];

for (let tina = 0; tina < tinasFollowers.length; tina++){
  for (let bobs = 0; bobs < bobsFollowers.length; bobs++){
    if (tinasFollowers[tina] === bobsFollowers[bobs]){
      mutualFollowers.push(tinasFollowers[tina]);
    }
  }
}

console.log(mutualFollowers);