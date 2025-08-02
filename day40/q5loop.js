// 5chake if a string contains the letter "Y"
// print "yes " if it does and "no" it does not

function letterY(str) {
  for (let char of str) {
    if (char === "y") {
      return console.log("yes");
    }
    return console.log("no");
  }
}
letterY("string");
