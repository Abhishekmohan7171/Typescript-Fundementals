"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
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
//**************************************************************
//Classes
//calling without constructor
/*
class Employee {
    id!: number;

    name!: string;

    address!: string;
}

let abhishek = new Employee();

abhishek.id = 1;
abhishek.name = "Abhishek Mohan";
abhishek.address = "Chennai"

console.log(abhishek)
*/
//calling with constructor
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getAddress() {
        return `${this.name} stays in ${this.address}`;
    }
}
_Employee_id = new WeakMap();
let abhishek = new Employee(1, "Abhishek Mohan A", "G.S.T Road");
let lynn = new Employee(2, "Lynn", "Vikings");
let addressing = abhishek.getAddress();
console.log(abhishek);
console.log(lynn);
console.log(addressing);
// # -> for private
//Inheritance
//Creating a derived class
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getManager() {
        return `${this.name} is a manager at ${this.address}.`;
    }
}
let mark = new Manager(1, "Mark Doe", "Michigan");
console.log(mark.getManager());
console.log(mark.getAddress());
/*
console.log(addr(2, 3, ...numbers));
console.log(sub(4, 1));
console.log(mul(4, 1));
*/
