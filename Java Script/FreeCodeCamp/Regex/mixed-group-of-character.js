let surename = ['Franklin D. Roosevelt', 'Eleanor Roosevelt', 'Franklin Rosevelt', 'Frank Roosevelt']
let regex = /(Eleanor|Franklin).*Roosevelt/;
for (let i in surename) {
    console.log(regex.test(surename[i]),surename[i]);
}
// Your regex myRegex should return true for the string Franklin D. Roosevelt
// Your regex myRegex should return true for the string Eleanor Roosevelt
// Your regex myRegex should return false for the string Franklin Rosevelt
// Your regex myRegex should return false for the string Frank Roosevelt
// You should use .test() to test the regex.
// Your result should return true