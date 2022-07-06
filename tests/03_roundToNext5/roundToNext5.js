// great solution! I did not think of this one. I solved using a while loop. This is more efficient.
function roundToNext5(num) {
  return Math.ceil(num / 5) * 5;
}

module.exports = { roundToNext5 };
