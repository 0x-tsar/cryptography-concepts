const { createHash } = require("crypto");

//creat a string hash
function hash(input) {
  //digest == output
  //SHA stands for secure hash algorithm
  return createHash("sha256").update(input).digest("hex");
}

let password = "hi-mom!";
const hash1 = hash(password);

let password2 = "hi-momw!";
const hash2 = hash(password2);

console.log(hash1 === hash2);
