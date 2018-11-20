const repeat = function(character, times) {
  return new Array(times).fill(character).join("");
}

exports.repeat = repeat;
