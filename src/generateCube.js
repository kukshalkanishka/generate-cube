const repeat = function(character, times) {
  return new Array(times).fill(character).join("");
}

const generateHollowLine = function(character, times) {
  let line = "";
  let repeatTimes = times/times || 0;

  line = line + (repeat(character, repeatTimes));

  if(times > 1) {
    line = line + repeat(" ", times -2);
    line = line + character;
  }

  return line;
}

exports.repeat = repeat;
exports.generateHollowLine = generateHollowLine;
