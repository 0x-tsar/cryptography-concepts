const { createHash } = require("crypto");

//creat a string hash
function hash(input) {
  //returns  a hash value called `digest` which returns  a
  //256-bit
  return createHash("sha256"); //stands for secure hash algorithm
}
