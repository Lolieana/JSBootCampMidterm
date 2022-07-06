// great job!
function betterThanAverage(arrOfSco, score) {
  let sum = score;
  for (let i = 0; i < arrOfSco.length; i++) {
    sum += arrOfSco[i];
  }
  const average = Math.floor(sum / (arrOfSco.length + 1));
  if (score === average) {
    return `your score ${score} is equal to the class average`;
  } if (score > average) {
    return `your score ${score} is greater than class average ${average}`;
  }
  return `your score ${score} is lower than class average ${average}`;
}

module.exports = { betterThanAverage };
