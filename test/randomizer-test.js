 /*
  This is a pseudo test for randomizer.js
  steps:
     * import randomizer.js module --this return a new instance of Randomizer
     * call setArr() method on the randomizer object with an array parameter
     * call pop() method on the randomizer object to get a random element from the array
     *
  Note: When the array is exhausted, it is automatically re-initialized.
 */

const randomizer = require('../src/randomizer');

let user = ['some1', 'some2', 'some3','some4','some5','some6','some7','some8', 'some9'];

randomizer.setArr(user);

console.log(
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop(),
  randomizer.pop()
  );
