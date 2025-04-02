let firstName : string;

firstName = "Khush Mohammad";

console.log(firstName);

console.log(firstName.toUpperCase());

let age : number = 24;

console.log(age);

let isValid: boolean = false;
console.log(isValid);

let empList : Array<string>;
empList = ["khush","khush2"];
console.log(empList);

let numList : Array<number>
numList = [1,2,3,4];
console.log(numList);

let result = numList.filter((num) => num%2);
console.log(result);

let fina = numList.map((num,index) => num*index);
console.log(fina);

enum Color {
    Red,
    Green,
    Blue,
}

let c: Color = Color.Blue;
console.log(c);
console.log(Color.Red);

// any allow us to use any data type
let nums: any;
nums = "10";

console.log(nums);
nums= 55;
console.log(nums);