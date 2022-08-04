//number
let age: number;
age = 22;

//array
let numlist: Array<number>;
numlist = [1, 2, 3, 3, 4];

let sum = numlist.reduce((acc, num) => acc + num);

let result = numlist.filter((num) => num > 2);

let empList: Array<string>;
empList = ["Abh", "Ash", "lynn", "Syd"];
let rollOut = empList.find((emp) => emp == "Abh");

//string
let student;
student = "Abhishek";

//enum
const enum Color {
	Red,
	Blue,
	Green,
}
let c: Color = Color.Blue;

// let swapnumbers: [number,number]

// function swap(num1: number,num2: number){
//     return [num2,num1];
// }

// swapnumbers = swap( 12,20)
// swapnumbers[0];

//any
let department: any;
department = "Asset";
department = "10";

//functions
//way one
function add(a: number, b: number): number {
	return a + b;
}

//way two
const sub = (a: number, b: number): number => a - b;

const mul = (a: number, b: number): number => {
	return a * b;
};

//optional parameter
function adds(a: number, b: number, c?: number): number {
	return a + b;
}

//required parameter
function addq(a: number, b: number, c = 10): number {
	return a + b + c;
}

//rest parameters
function addr(a: number, b: number, ...c: number[]): number {
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
     #id!: number;
	 //if protected we can mention lke
	 // protected name!: string;
     name!: string;
     address!: string;

	 constructor(id: number, name: string, address: string){
	   this.#id  = id;
	   this.name = name;
	   this.address = address;
	 }

	 getAddress() : string{
     	return `${this.name} stays in ${this.address}`;
     }
 }

let abhishek = new Employee(1,"Abhishek Mohan A","G.S.T Road");
let lynn  = new Employee(2,"Lynn","Vikings");

let addressing = abhishek.getAddress();

console.log(abhishek);
console.log(lynn);
console.log(addressing)

// # -> for private
//Inheritance
//Creating a derived class

class Manager extends Employee{
	constructor(id:number,name: string,address: string){
		super(id,name,address);
	}

	getManager () :string{
		return `${this.name} is a manager at ${this.address}.`;
	}
}

let mark = new Manager(1,"Mark Doe","Michigan");
console.log(mark.getManager())
console.log(mark.getAddress()); //caling the function in parent class

//Interfaces ************************************************************

interface User{
	name: string;
	id: number;
	sge: number;
	sddress: string;
}

let user:User{ name:"John", id:1, address:"Chennai"}

interface Employees extends User{
	email:string;
    salary:number;
}

let employee: Employees {name;"John",age:31,address:'Chennai',salary:20000,email:"jaohn@comoany.com"}
	
/*
console.log(addr(2, 3, ...numbers));
console.log(sub(4, 1));
console.log(mul(4, 1));
*/
