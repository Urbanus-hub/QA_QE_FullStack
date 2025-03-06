// console.log("hello world");
// let name = "kioko";
// console.log(typeof name);
// console.log(typeof undefined)
// console.log("5" + 2); //output: 52
//  console.log("5" - 3); //output:3

// console.log(5 + true);
function findFirstNonRepeatedCharacter(str) {
  let count = 0;
  let unrepeated = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str.charAt(i) == str.charAt(j)) {
        count++;
      }
    }
    console.log(count);
    if (count < 2) {
      unrepeated = str.charAt(i);
      return unrepeated;
    } else {
      count = 0;
    }
  }
  return "";
}

console.log(findFirstNonRepeatedCharacter("roar"));
