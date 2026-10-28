function isAnagram(s1, s2){

    if(s1.length !== s2.length) return false;

    return s1.split("").sort().join("") == s2.split("").sort().join("");
}
console.log(isAnagram("silent", "small"));


function isPalindrom(str){
    return str === str.split("").reverse().join("");

}
console.log(isPalindrom("Amma"));


function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr("Reverse String"));


function count(str){
    let result = {};

for (let ch of str){
    result[ch] = (result[ch] || 0) + 1;
}
return result;
    
}
console.log(count("StringS"));


function count(str){
    let result = {};
  for(let ch of str){
    result [ch] = (result[ch] || 0) + 1;
  }
}
return result;

function flattenArray(arr) {
return arr.reduce((acc, curr) => {

return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
}, []);
}
console.log(flattenArray([1, [2, [3, 4]], 5]));

function flattenArray(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
    }, []);
}
console.log(flattenArray([1, [2, [3, 4]], 5]));


function Outer(){
    let count = 0;
    return function Inner(){
        count++;
        console.log(count);
    }
}
const fn = Outer();
fn();
fn();

function isPalindrom(){
    return str === split("").reverse().join("")
}
console.log(isPalindrom("AMMA"));


function Outer(){
    let count = 0;
    return function Outer(){
        count++
        console.log(count);
}
}
const fn = Outer();
fn();
fn();
