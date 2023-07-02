function sayHello(name: string = "Non", lastName: string = "Non") : string{
    console.log("Hello World");
    return name + "Tanawin KMUTNB" + lastName;
}

function sum(a:number, b:number, ...rest:number[]){
    return a + b + rest.reduce((a, b)=>a+b,0);
}

function add({x, y}:{x:number, y:number}):number{
    return x+y;
}


console.log("Hello" + sum(1,2,3,4,5,6,7,8,9,10));
console.log(add({y:5, x:10}))