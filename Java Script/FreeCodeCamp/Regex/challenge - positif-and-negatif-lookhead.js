// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
// Your regex should use two positive lookaheads
// Your regex should not match the string astronauts
// Your regex should not match the string banan1
// Your regex should match the string bana12
// Your regex should match the string abc123
// Your regex should not match the string 12345
// Your regex should match the string 8pass99
// Your regex should not match the string 1a2bcde
// Your regex should match the string astr1on11aut

let index = ['astronauts', 'banan1', 'bana12', 12345, '8pass99', '1a2bcde', 'astr1on11aut'];
let regex = /(?=\w{6,})(?=\w*\d{2})/;

for (let i in index) {
    console.log(regex.test(index[i]), index[i]);
}