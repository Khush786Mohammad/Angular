interface User{
    name : string;
    age: number;
    id: number;
    email: string; 
    salary?: number
}

let user1: User = {
    name : "khush",
    age: 22,
    id: 2812573,
    email: "khush.mohammad@tcs.com"
};

console.log(user1);

interface Login{
    login(): User;
}

// destructuring

let {name : userName, email: userEmail}: User = user1;
console.log(userName, userEmail); 

let userArray: User[] = [
    {
        name: "Json",
        age: 50,
        id: 80232,
        email: "json@react.com",
        salary: 25000
    },
    {
        name: "Gson",
        age: 30,
        id: 234235,
        email: "Gson@react.com",
    },
    {
        name: "Ajax",
        age: 60,
        id: 234235,
        email: "Gson@react.com",
        salary: 60000
    }
];

for(let i of userArray){
    console.log(i.name, i.email, i.salary);
}

let fas: User[] = userArray.filter((user) => user?.salary ? user : null);

console.log(fas);
