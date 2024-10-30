"use strict";
let a = 25;
// let name = "Himanshu";  --> ERROR ( name keyword can't be used, its already declared in JS window )
let str = "Himanshu";
// str will have all the functions of string class
console.log(str.charAt(2)); // 0 based indexing
// Specifying types in directly during declaration
let s = "{23}";
let num = 232;
console.log(num);
let b; // can take any type, "any" can be specified
let c;
let id; // can be a number or string
const fun = (a, b) => {
    return a * b;
};
console.log(fun(2, 3));
let ct = "Hello";
const mul = (a, b) => {
    return a * b;
};
