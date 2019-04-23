function flip() {
  return Math.random() >= 0.5;
}

function createBinary(n) {
  var bin = "";
  var i = 0,
    iMax = n;

  //iterate over n, if is flip() is true, concatenate 0, otherwise concatenate 1
  //n is the binary length
  for (; i < iMax; i++) {
    bin += flip() ? "0" : "1";
  }

  return bin;
}

function randomNumber(n) {
    // validating task conditions
  if (typeof n === "undefined") throw new Error("A Number is required");
  if (isNaN(parseInt(n))) throw new Error("Must be a number");
  if (n <= 0) throw new Error("Must be greater than 0");
  if (n > 1000000) throw new Error("Must be lower than 1,000,000");

  // if is one return 0
  if (parseInt(n) === 1) {
    console.log(0);
    return 0;
  }

  /**
   * conver n to integer
   * toString(2) to get binary value, and length of it, so it not generates a greater number than n
   */
  let number = parseInt(n), // convert n to integer
    binLength = number.toString(2).length; // 

  // randomNumber declaration and boolean to check if number if minor than n
  let randomNumber,
    randomFound = false;

    // true if randomFound is false
  while (!randomFound) {
      //use parseInt with 2 to convert binary to integer
    randomNumber = parseInt(createBinary(binLength), 2);
    // if random number is minor than number(n) convert boolean to true
    if (randomNumber < number) {
      randomFound = true;
    }
  }

  console.log(randomNumber);
  return randomNumber;
}

randomNumber(500); // returns 123
randomNumber(1); // returns 0
randomNumber(500); // returns 466
randomNumber(1000001); // throw error
