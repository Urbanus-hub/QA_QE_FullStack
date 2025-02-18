function is_string(input){
    if((typeof input) == "string"){
       return true;
    }
    else{
       return false
    }
   };
   
   console.log(is_string("w3resource"))
   console.log(is_string([1, 2, 4, 0]))
   
   function is_blank(input){
   if(input.length==0){
       return true;
   }
   else{
       return false;
   }
   }
   
   console.log(is_blank(''));
   console.log(is_blank('abc'));
   
   function string_to_array(text){
    return text.split(' ')
   }
   
   console.log(string_to_array("Robin Singh"))
   
   function truncate_string(text,count){
   return text.substr(0,count);
   }
   
   console.log(truncate_string("Robin Singh", 4));
   
   function abbrev_name(name){
       let charArray=name.split(" ");
       return charArray[0] + " " + charArray[1].charAt(0);
   }
   
   console.log(abbrev_name("Robin Singh"));
   
   function protect_email(email){
       let email_start=email.indexOf('_');
       let email_end= email.indexOf("@");
       let email_protect=email.substring(email_start,email_end);
       let new_email=email.replace(email_protect,"...");
       return new_email;
   }
   
   console.log(protect_email("robin_singh@example.com"));
   
   function string_parameterize(text){
       let new_text=text.split();
       let text_param=new_text.map((letter)=>{
         if(letter ==" "){
           new_text.replace()
         }
       })
   }
   
   console.log(string_parameterize("Robin Singh from USA."));
   
   function capitalize(text){
       let firstletter=text.charAt(0);
       let new_text=text.replace(firstletter,firstletter.toUpperCase());
       return new_text;
   } 
   
   console.log(capitalize('js string exercises'));
   
   function capitalize_Words(str) {
       return str.replace(/\b\w/g, char => char.toUpperCase());
   }
   
   console.log(capitalize_Words('js string exercises'));
   
   function swapcase(str) {
       return str
           .split('')
           .map(char => 
               char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
           )
           .join('');
   }
   
   console.log(swapcase('AaBbc')); 
   
   function camelize(input) {
       return input
           .split(' ')
           .map((word, index) => 
               index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
           )
           .join('');
   }
   
   console.log(camelize("JavaScript Exercises"));
   
   function uncamelize(input, separator = ' ') {
       return input
           .split('')
           .map(letter => (letter === letter.toUpperCase() ? separator + letter.toLowerCase() : letter))
           .join('');
   }
   
   console.log(uncamelize('helloWorld', '-'));
   
   function repeat(name,count){
       return name.repeat(count);
   }
   
   console.log(repeat('Ha!', 3));
   
   function insert(str,strInsert,position){
       return str.slice(0,position) +strInsert+ str.slice(position);
   }
   
   console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
   
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
   
   console.log(humanize_format(301));
   
   function text_truncate(str, length, suffix) {
       return str.substring(0, length) + suffix;
   }
   
   console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
   
   function string_chop(str, chunkSize) {
       let chunks = [];
       for (let i = 0; i < str.length; i += chunkSize) {
           chunks.push(str.slice(i, i + chunkSize));
       }
       return chunks;
   }
   
   console.log(string_chop('w3resource', 3));
   
   function count(str, subStr) {
       const regex = new RegExp(subStr, 'gi');
       return (str.match(regex) || []).length;
   }
   
   console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
   
   function reverse_binary(num) {
       let binaryStr = num.toString(2);
       let reversedBinary = binaryStr.split('').reverse().join('');
       return parseInt(reversedBinary, 2);
   }
   
   console.log(reverse_binary(100));
   
   function formatted_string(pad, str, side) {
       str = str.toString();
   
       if (side === 'l') {
           return (pad + str).slice(-pad.length);
       } else if (side === 'r') {
           return (str + pad).slice(0, pad.length);
       } else {
           return str; 
       }
   }
   
   console.log(formatted_string('0000', 123, 'l'));
   