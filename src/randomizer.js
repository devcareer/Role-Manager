/*
  This is a pseudo test for randomizer.js
  steps:
     * import randomizer.js module --this return a new instance of Randomizer
     * call setArr() method on the randomizer object with an array parameter
     * call pop() method on the randomizer object to get a random element from the array
     *
  Note: The process of re-initializing the array is well handled. No need to worry about that again
 */

let mainArr = [];
let backUpArr = [];

class Randomizer {
  constructor(){
  }

  setArr(arr){
    if(!Array.isArray(arr)){
      throw new Error('Parameter must be an array');
    }
    mainArr = arr;
  }

  pop(){
    if(mainArr.length == 0){
      let temp = backUpArr;
      backUpArr = mainArr;
      this.setArr(temp);
    }
    let leaderIndex = Math.floor(Math.random() * mainArr.length);
    let leader = mainArr.splice(leaderIndex, 1)[0];
    backUpArr.push(leader);
    return leader;
  }
}

module.exports = new Randomizer();
