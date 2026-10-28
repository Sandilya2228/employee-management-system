function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr("Sandilya"));

function isPalindrome(str){
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("AMMA"));

function isAnagram(s1, s2){

    if (s1.length !== s2.length) return false;
    return(s1.split("").sort().join("")  == s2.split("").sort().join(""));
}
console.log(isAnagram("listen", "silent"));