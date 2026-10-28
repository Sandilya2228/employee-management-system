function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam"));


function isAnagram(s1, s2){
    if (s1.length !== s2.length) return false;

    return s1.split("").sort().join("") == s2.split("").sort().join("");  
}
console.log(isAnagram("silent", "listen"));

function reverseStr(str){
    return str.split("").reverse().join("");

}
console.log(reverseStr("Sandilya"));

function count(str){
    let result = {};

    for (let ch of str){
        result[ch] = (result[ch] ||0 ) + 1; 
    }
    return result;
}
console.log(count("javaScripts"));


const numbers = [2, 4, 6, 8];

const doubled = numbers.map(number=>{
    return number*2;
})
console.log(doubled);

const names = ["john", "alice", "david"];
 const uppercase = names.map(name =>name.toUpperCase());
 console.log(uppercase);