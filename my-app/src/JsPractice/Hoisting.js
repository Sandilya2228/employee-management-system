sayHello();

function sayHello() {
    console.log("Hello");}

    /* out put = Hello
    because of function declaration, it is hoisted to the top of the scope and can be called before its definition. */

/*sayHi();

var sayHi = function(){
    console.log("Hi");
}
/* output = TypeError: sayHi is not a function*/

var a = 10;
console.log(a);
