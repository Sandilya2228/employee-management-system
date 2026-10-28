/*function Outer(){
    let count = 0;
    return function Inner(){
        count++;
        console.log(count)
    };
}
const fn = Outer();
fn();
fn();*/
function Outer(){
    let count = 0;
    return function Inner(){
        count++;
        console.log(count);
    };
}
const fn = Outer();
fn();
fn();


function isAnagram(s1, s2){
    if (s1.length !== s2.length) return false;
    return s1.split("").sort().join("") == s2.split("").sort().join("");
}
console.log(isAnagram("silent", "listen"));


function count(){
    let result = {};

    for (let ch of str){
        result[ch] = (result[ch] || 0) + 1
    }
    return result;
}
console.log(count("Javascript"));


function Outer (){
    let count = 0;
   return function Inner(){
        count++;
        console.log(count);
    }
}
const fn = Outer();
 fn();
 fn();

 function isAnagram(){
    if (s1.length !== s2.length) return false
    return s1.split("").sort().join() == s2.split("").sort().join("");
 }
 console.log(isAnagram("silent" , "listen"));

 function count(){
    let result = {};

    for (let ch of str){
        result[ch] = (result[ch] || 0 ) + 1
    }
    return result;
 }
 console.log("JavaScript");


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