/* 
Write a function that returns the string "something" joined with a space " " and the given argument a.
*/

const giveMeSomething = (string) => {
    const SENTENCE = `something ${string}`;
    return SENTENCE;
}

module.exports = giveMeSomething;