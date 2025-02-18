
// 1. Check if a String is a Palindrome
// Write a function to determine if a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).
function isPalindrome(str){
    let newStr=str.toLowerCase().split(" ").join().replaceAll(/[, ?]/g,"");
    console.log(newStr)
    let revStr= newStr.split().reverse().join();
    
    console.log(revStr);
    if(newStr===revStr){
        return true;
    }
    else{
        return false;
    }
}
// test
console.log(isPalindrome("A man , a plan , a canl, Panama")); // true

// 2. Reverse a String
// Write a function to reverse a given string
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello world"))

// 3. Find the Longest Palindromic Substring
// Write a function to find the longest palindromic substring in a given string.
function longestPalindromicString(str) {
    let arr = [];
    let str1 = str.split("").reverse();
    let str2 = str.split("");
    for (let i = 0; i < str2.length; i++) {
      if (str2[i] == str1[i]) {
        arr.push(str1[i]);
      } else {
        continue;
      }
    }
    return arr.join("");
  }
  console.log(longestPalindromicString("babad")); //Output: 'aba'
  console.log(longestPalindromicString("cbbd")); //Output:'bb'
        


        // 4. Check if Two Strings are Anagrams
        // Write a function to check if two given strings are anagrams of each other. Two strings are anagrams if they contain the same characters in the same frequency but in different orders.
 function areAnagrams(str1,str2){
     const sortStr = (str)=>{
      str.toLowerCase().split('').sort().join();
     }      
     return sortStr(str1)===sortStr(str2);
}

console.log(areAnagrams("Listen","Silent"));
// 5. Remove Duplicates from a String
// Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.
function removeDuplicates(str) {
    return [...new Set(str)].join('');


}
console.log(removeDuplicates("programming"))

//6. Count Palindromes in a String
// Write a function to count how many distinct palindromes are in a given string. A palindrome is considered distinct based on its start and end position in the string.
function countPalindromes(str) {
    let count = 0;
    let seen = new Set();
  
    function isPalindrome(s) {
      return s === s.split("").reverse().join("");
    }
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        let substring = str.slice(i, j);
        if (isPalindrome(substring) && !seen.has(substring)) {
          seen.add(substring);
          count++;
        }
      }
    }
  
    return count;
  }
  
  console.log(countPalindromes("ababa")); // 7
  console.log(countPalindromes("racecar")); // 7
  console.log(countPalindromes("aabb")); // 4
  console.log(countPalindromes("a")); // 1
  console.log(countPalindromes("abc")); // 3

  //7. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array
// of strings. If there is no common prefix, return an empty string.
function longestCommonPrefix(arr) {
  if (arr.length === 0) return "";
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return '';
    }
  }
  return '${prefix}';
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ''
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"])
); // inters
console.log(longestCommonPrefix(["prefix", "prefixes", "preform"])); // pref
console.log(longestCommonPrefix(["apple", "banana", "cherry"])); // ''

// 8. Case Insensitive Palindrome
// Modify the palindrome function to be case insensitive, meaning it should ignore upper and lower case differences when checking for a palindrome.
function isCaseInsensitivePalindrome(str) {
  const normalStr = str.toLowerCase();
  const reversedStr = normalStr.split("").reverse().join("");
  return normalStr === reversedStr;
}
console.log(isCaseInsensitivePalindrome("Aba")); //true
console.log(isCaseInsensitivePalindrome("Racecar")); //true
console.log(isCaseInsensitivePalindrome("Palindrome")); //false
console.log(isCaseInsensitivePalindrome("Madam")); //true
console.log(isCaseInsensitivePalindrome("Hello")); //false