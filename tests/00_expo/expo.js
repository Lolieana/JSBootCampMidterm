// Do not use Math.pow() in your solution.
function expo(num, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result *= num;
  }
  return result;
}

module.exports = { expo };
