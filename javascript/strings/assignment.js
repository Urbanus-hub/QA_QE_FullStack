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
function uncamelize(input){
   return input.split('').map((letter,index)=>{
        if(letter==letter.toUpperCase()){
         return index;
        }
    }
    ).join("").replace(charAt(index)," ")
}
console.log(uncamelize('helloWorld','-'));