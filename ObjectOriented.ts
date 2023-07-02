class Human{
    name:string = ""
    latname:string = ""
    age:number = 0

    sayHello(){
        return "Hello ! I'm "+this.name+" and "+this.age+" years old."
    }
}

const user1:any = new Human()
user1.name = "Tanawin"
user1.age = 23

console.log(user1.sayHello())