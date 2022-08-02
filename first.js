"use strict";
//number
let age;
age = 22;
//array
let numlist;
numlist = [1, 2, 3, 3, 4];
let sum = numlist.reduce((acc, num) => acc + num);
let result = numlist.filter((num) => num > 2);
let empList;
empList = ["Abh", "Ash", "lynn", "Syd"];
let rollOut = empList.find((emp) => emp == "Abh");
//string
let student;
student = "Abhishek";
let c = 1 /* Color.Blue */;
// let swapnumbers: [number,number]
// function swap(num1: number,num2: number){
//     return [num2,num1];
// }
// swapnumbers = swap( 12,20)
// swapnumbers[0];
//any
let department;
department = "Asset";
department = "10";
//functions
//way one
function add(a, b) {
    return a + b;
}
//way two
const sub = (a, b) => a - b;
const mul = (a, b) => {
    return a * b;
};
//optional parameter
function adds(a, b, c) {
    return a + b;
}
//required parameter
function addq(a, b, c = 10) {
    return a + b + c;
}
//rest parameters
function addr(a, b, ...c) {
    return a + b + c.reduce((acc, num) => acc + num);
}
let numbers = [1, 2, 3];
console.log(addr(2, 3, ...numbers));
console.log(sub(4, 1));
console.log(mul(4, 1));
