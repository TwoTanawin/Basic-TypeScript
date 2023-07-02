// class Point{
    // x: number;
    // y: number;
    // readonly version:string = "1.0.1";
    // // Overload
    // // constructor(z: number, q:string);
    // constructor(x:number = 0, y:number = 0){
    //     this.x = x;
    //     this.y = y;
    //     console.log("Hello");
    // }
//     _x:number = 0;
//     get x():number{
//         this.x = this.x + 1;
//         return this.x;
//     }
//     set x(value:number){
//         this.x = value;
//     }
// }

// const point = new Point();
// // point.x = 100;
// // console.log(`${point.x} -- ${point.y}`);
// console.log(point._x)

class Person{
    name: string = "";
    constructor(name){
        this.name = name;
    } 
    sayHi(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

const person = new Person("Tanawin");
person.sayHi()