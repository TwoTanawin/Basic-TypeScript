
const app_anme: string = "My App";
const myArray: number[] = [1, 2, 3];
let myArray2: any[] = [1, 2, 3, "Hello"];

function sayHello(){
    let myName: string = "Tanawin Siriwan";
    let money: number = 2000;
    var myAge: number;

    console.log(myName);
    console.log(typeof(myName));

    console.log(money);
    console.log(typeof(money));
}

// sayHello();
// console.log(myArray);
// console.log(myArray2.pop());
// console.log(myArray2.push("AI-Center"));
// console.log(myArray2[3]);

let employee:[number, string][] = [[1 , "two"]];
employee.push([2, "kmutnb"]);
console.log(employee);