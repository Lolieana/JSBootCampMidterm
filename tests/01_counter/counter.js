function counter(num) {
  let returnArr = [];
  for (let i = 1; i <= num; i++) {
    returnArr.push(i);
  }
  return returnArr;
}

module.exports = { counter };
