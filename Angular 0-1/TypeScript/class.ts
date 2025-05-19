class Employee {
    id!: number ;
    name !: string;
    address !: string;

    constructor(id: number, name: string, address: string){
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getEmployeeDetails() : string{
        return `${this.id} ${this.name} ${this.address}`;
    }
}

let john = new Employee(102,'Khush',"hld");
console.log(john);

john.id = 101;
john.name = 'John';
john.address = 'UK';

console.log(john);

console.log(john.getEmployeeDetails());

class Student{
    //private variable 

    #id !: number; // private id: number
    name !: string;
    static college : string = "Graphic Era";
}

let std1 = new Student;
// private variable are not accessible outside the class;
// std1.id = 101; 
std1.name = 'kamal';
console.log(Student.college);