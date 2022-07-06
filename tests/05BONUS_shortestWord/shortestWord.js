// Looks good. Great job!
function findShortestWord(str) {
  const word = str.split(' ');
  let shortLength = word[0].length;
  let shortWord = word[0];
  for (let i = 0; i < word.length; i++) {
    if (word[i].length < shortLength) {
      shortLength = word[i].length;
      shortWord = word[i];
    }
  }
  return shortWord;
}

module.exports = { findShortestWord };
