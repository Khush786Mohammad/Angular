function add(num1: number, num2: number) : number{
    return num1+num2;
}

console.log(add(10,2));

const sub = (num1: number, num2: number) :number => {
    return num1-num2;
}

console.log(sub(20,5));

function requiredParameter(num1: number, num2: number, num3?:number) : number{
    return num3? num1+num2+num3 : num1+num2;
}

console.log(requiredParameter(10,40));
console.log(requiredParameter(45,45,45));

function optionalParameter(num1: number, num2: number, num3: number=50) : number{
    return num1+num2+num3;
}

console.log(optionalParameter(10,20));
console.log(optionalParameter(10,10,10));

function restParameter(num1: number, num2: number, ...arr: number[]) : number{
    return num1+num2+arr.reduce((curr,acc) =>  curr+acc,0);
}

console.log(restParameter(10,20,100,200,300));