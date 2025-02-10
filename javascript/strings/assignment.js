// 1. Check String Input 
// ○ Write a JavaScript function to check whether an 'input' is a string or not.
function is_string(input){
 if((typeof input) == "string"){
    return true;
 }
 else{
    return false
 }
};
//test
console.log(is_string("w3resource"))
console.log(is_string([1, 2, 4, 0]))
// 2. Check Blank String 
// ○ Write a JavaScript function to check whether a string is blank or not.
function is_blank(input){
if(input.length==0){
    return true;
}
else{
    return false;
}
}
// test
console.log(is_blank(''));
console.log(is_blank('abc'));

// 3. String to Array of Words 
// ○ Write a JavaScript function to split a string and convert it into an array of words. 
function string_to_array(text){
 return text.split(' ')
}
console.log(string_to_array("Robin Singh"))
//4 Extract Characters 
// ○ Write a JavaScript function to extract a specified number of characters from a 
// string. 
// ○ Test Data: 
// console.log(truncate_string("Robin Singh", 4)); // "Robi"
function truncate_string(text,count){
return text.substr(0,count);
}
//test
console.log(truncate_string("Robin Singh", 4));

// 5. Abbreviate Name 
// ○ Write a JavaScript function to convert a string into abbreviated form. 
// ○ Test Data: 
// console.log(abbrev_name("Robin Singh")); // "Robin S."
function abbrev_name(name){
    let charArray=name.split(" ");
    return charArray[0] + " " + charArray[1].charAt(0);
}

// test
console.log(abbrev_name("Robin Singh"));

// 6. Hide Email Address 
// ○ Write a JavaScript function that hides email addresses to prevent unauthorized 
// access. 
// ○ Test Data: 
// console.log(protect_email("robin_singh@example.com")); // 
// "robin...@example.com" 
function protect_email(email){
    let email_start=email.indexOf('_');
    let email_end= email.indexOf("@");
    let email_protect=email.substring(email_start,email_end);
    let new_email=email.replace(email_protect,"...");
    return new_email;
}

// test
console.log(protect_email("robin_singh@example.com"));
// Parameterize String 
// ○ Write a JavaScript function to parameterize a string. 
// ○ Test Data: 
// console.log(string_parameterize("Robin Singh from USA.")); // 
// "robin-singh-from-usa" 
function string_parameterize(text){
    let new_text=text.split();
    let text_param=new_text.map((letter)=>{
      if(letter ==" "){
        new_text.replace()
      }
    })
    
    
    
}

// test
console.log(string_parameterize("Robin Singh from USA."));
// Capitalize First Letter 
// ○ Write a JavaScript function to capitalize the first letter of a string. 
// ○ Test Data: 
// console.log(capitalize('js string exercises')); // "Js string exercises"
function capitalize(text){
    let firstletter=text.charAt(0);
    let new_text=text.replace(firstletter,firstletter.toUpperCase());
    return new_text;
} 
// test
console.log(capitalize('js string exercises'));

// 9. Capitalize Each Word 
// ○ Write a JavaScript function to capitalize the first letter of each word in a string. 
// ○ Test Data: 
// console.log(capitalize_Words('js string exercises')); // "Js String Exercises" 
function capitalize_Words(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Test Data
console.log(capitalize_Words('js string exercises'));
// 10. Swap Case 
// ○ Write a JavaScript function that converts uppercase letters to lowercase and vice 
// versa. 
// ○ Test Data: 
// console.log(swapcase('AaBbc')); // "aAbBC"
function swapcase(str) {
    return str
        .split('')
        .map(char => 
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        )
        .join('');
}

// test
console.log(swapcase('AaBbc')); 

// Camelize String 
// ○ Write a JavaScript function to convert a string into camel case. 
// ○ Test Data: 
// console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises" 
function camelize(input) {
    return input
        .split(' ') // Split into words
        .map((word, index) => 
            index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

// Test Data
console.log(camelize("JavaScript Exercises"));
// 2. Uncamelize String 
// ○ Write a JavaScript function to uncamelize a string. 
// Test Data: 
// console.log(uncamelize('helloWorld')); // "hello world" 
// ○ console.log(uncamelize('helloWorld','-')); // "hello-world" 
function uncamelize(input, separator = ' ') {
    return input
        .split('')
        .map(letter => (letter === letter.toUpperCase() ? separator + letter.toLowerCase() : letter))
        .join('');
}

// Test cases
console.log(uncamelize('helloWorld', '-')); // "hello-world"

// 13. Repeat String 
// ○ Write a JavaScript function to concatenate a given string n times. 
// ○ Test Data: 
// console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"
function repeat(name,count){
    
    return name.repeat(count);
}
// test
console.log(repeat('Ha!', 3));
// 14. Insert in String 
// ○ Write a JavaScript function to insert a string within another string at a given 
// position. 
// Test Data: 
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); 
// ○ // "We are doing some JavaScript exercises." 
function insert(str,strInsert,position){
    return str.slice(0,position) +strInsert+ str.slice(position);
}

// test
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
// 15. Humanize Format 
// ○ Write a JavaScript function that formats a number with the correct suffix (1st, 
// 2nd, etc.). 
// ○ Test Data: 
// console.log(humanize_format(301)); // "301st" 
function humanize_format(number) {
    if (typeof number !== "number") return number; 
    
    let lastDigit = number % 10;
    let lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return number + "th";
    }

    switch (lastDigit) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
        default: return number + "th";
    }
}
// test
console.log(humanize_format(301));
// 16. Truncate String with Ellipsis 
// ○ Write a JavaScript function to truncate a string and append "...". 
// Test Data: 
// console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); 
// ○ // "We are doing !!" 
function text_truncate(str, length, suffix) {
    return str.substring(0, length) + suffix;
}
//test
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
// 17. Chop String into Chunks 
// ○ Write a JavaScript function to chop a string into chunks. 
// ○ Test Data: 
// console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]
function string_chop(str, chunkSize) {
    let chunks = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        chunks.push(str.slice(i, i + chunkSize));

    }
    return chunks;
}
//text
console.log(string_chop('w3resource', 3));

// 18. Count Substring Occurrences 
// ○ Write a JavaScript function to count occurrences of a substring in a string. 
// Test Data: 
// console.log(count("The quick brown fox jumps over the lazy dog", 'the')); 

function count(str, subStr) {
    const regex = new RegExp(subStr, 'gi'); // 'g' for global match, 'i' for case-insensitive
    return (str.match(regex) || []).length;
}
//test
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));

// 19. Reverse Binary Representation 
// ○ Write a JavaScript function that reverses the binary representation of a number 
// and returns its decimal form. 
// ○ Test Data: 
// console.log(reverse_binary(100)); // 19 
function reverse_binary(num) {
    let binaryStr = num.toString(2); // Convert number to binary
    let reversedBinary = binaryStr.split('').reverse().join(''); // Reverse the binary string
    return parseInt(reversedBinary, 2); // Convert reversed binary back to decimal
}

console.log(reverse_binary(100));

// 20. Pad String to Length 
// ○ Write a JavaScript function to pad a string to a specified length. 
// ○ Test Data: 
// console.log(formatted_string('0000', 123, 'l')); // "0123"
function formatted_string(pad, str, side) {
    str = str.toString(); // Convert input to string

    if (side === 'l') {
        return (pad + str).slice(-pad.length); // Left padding
    } else if (side === 'r') {
        return (str + pad).slice(0, pad.length); // Right padding
    } else {
        return str; 
    }
}

// Tes

console.log(formatted_string('0000', 123, 'l'));