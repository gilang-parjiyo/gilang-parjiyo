let group = 'fromis_9';
let regCase = /Fromis_9/;
let regIgnoreCase = /Fromis_9/i;
let resultCase = regCase.test(group); // result false karena matcing masih case sensitive.
let resultIgnore = regIgnoreCase.test(group); // result true karena case sensitive di ignore menggunakan keyword 'i'. 