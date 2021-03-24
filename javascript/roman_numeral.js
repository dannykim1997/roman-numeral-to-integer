function romanNumeral(string) {
  let value = 0;
    const order = ["M", "D", "C", "L", "X", "V", "I"];
    const key = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    for (let i = 0; i < string.length; i++) {
        value += key[string.charAt(i)];
        if (i !== 0) {
            if (
                string.charAt(i - 1) === order[order.indexOf(string.charAt(i)) + 1] ||
                string.charAt(i - 1) === order[order.indexOf(string.charAt(i)) + 2]
            ) {
                value -= key[string.charAt(i - 1)] * 2;
            }
        }
    }
    return value;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
