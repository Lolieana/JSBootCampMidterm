function swapCase(str) {
  let returnStr = '';
  let splitStr = str.split('');
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === splitStr[i].toLowerCase()) {
      returnStr += splitStr[i].toUpperCase();
    } else {
      returnStr += splitStr[i].toLowerCase();
    }
  }
  return returnStr;
}

module.exports = { swapCase };
