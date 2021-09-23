let sentence = 'Hello my name is Gilang Romadhan';
let regMatch = /Gilang/;
let regNotMatch = /gilang/;

regWords.test(sentence); // return true karena 'Gilang' === 'Gilang';
regNotMatch.test(sentence); // return false karean 'gilang' != 'Gilang';

//regex method test case sensitive.
