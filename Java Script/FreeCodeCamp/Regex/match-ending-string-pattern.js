const STORY1 = 'This is never ending story';
const STORY2 = 'This story will never ending';

let regStory = /story$/;

console.log(regStory.test(STORY1)); // true there is text story in the last sentence.
console.log(regStory.test(STORY2)); // false there is no sotry in the ending of sentence.