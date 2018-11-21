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

const generateSquare = function(character, side, type) {
  let square = [];

  for(let row = 0; row < side; row++){
    let rowType = type[1];

    if(row == 0 || row == side -1){
      rowType = type[0];
    }

    square.push(rowType(character, side));
  }
  return square;
}

exports.repeat = repeat;
exports.generateHollowLine = generateHollowLine;
exports.generateSquare = generateSquare;
