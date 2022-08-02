//number
let age : number;
age = 22;

//array
let numlist : Array<number>;
numlist = [1,2,3,3,4]

let sum = numlist.reduce((acc, num) => acc + num)

let result = numlist.filter((num)=> num > 2 )

let empList : Array<string>
empList = ["Abh","Ash","lynn","Syd"]
let rollOut = empList.find((emp) => emp == "Abh")

//string
let  student;
student = "Abhishek"

//enum
const enum Color {
    Red,
    Blue,
    Green
}
let c:Color = Color.Blue;

// let swapnumbers: [number,number]

// function swap(num1: number,num2: number){
//     return [num2,num1];
// }

// swapnumbers = swap( 12,20)
// swapnumbers[0];

//any
let department : any;
department = "Asset"
department = "10";

//functions
//way one
function add(a:number,b:number):number{
    return a+b;
}

//way two
const sub = (a:number,b:number):number =>  a-b;


console.log(sub(4,1))