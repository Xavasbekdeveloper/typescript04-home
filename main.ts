console.log("TS homework");


// ===== Encapsulation =====

//1
class User {
    fname: string
    public lname: string
    age: number
    private password: string
    private username: string

    constructor(fname: string, lname: string, age:number, password: string, username: string) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.password = password;
        this.username = username;
    }
}

let user: User = new User("John", "Doe", 21, "johndoe22", "johndoe22");

// console.log(user);


//2
class Student {
    fname: string
    public lname: string
    private teacher: string
    private classes: string

    constructor(fname: string, lname: string, teacher: string, classes: string) {
        this.fname = fname;
        this.lname = lname;
        this.teacher = teacher
        this.classes = classes;
    }
}

let student: Student = new Student("John", "Doe", "Mike", "History and Math");

// console.log(student);

//3
class Car {
    name: string
    brand: string
    private createdAt: number
    hp: number
    private speed: number

    constructor(name: string, brand: string, createdAt: number, hp:number, speed: number) {
        this.name = name;
        this.brand = brand;
        this.createdAt = createdAt;
        this.hp = hp;
        this.speed = speed;
    }
}

let car: Car = new Car("m5", "BMW", 2017, 650, 400)

// console.log(car);


// ===== Inheritance =====

// 1
class Car2 {
    name: string
    brand: string
    createdAt: number
    constructor(name: string, brand: string, createdAt: number) {
        this.name = name;
        this.brand = brand;
        this.createdAt = createdAt; 
    }
}

class SuperCar extends Car2 {
    hp: number
    speed: number
    constructor(name: string, brand: string, createdAt: number, hp:number, speed: number){
        super(name, brand, createdAt)
        this.hp = hp;
        this.speed = speed;
    }
}

let car2: Car2 = new SuperCar("Gentra", "Chevrolet", 2015, 60, 240)

// console.log(car2);


// 2
class Phone {
    name: string
    brand: string

    constructor(name: string, brand: string){
        this.name = name;
        this.brand = brand;
    }
}

class Samsung extends Phone {
    camera: number
    battery: number
    price: number
    constructor(name: string, brand: string, camera: number, battery: number, price: number){
        super(name, brand)
        this.camera = camera;
        this.battery = battery;
        this.price = price
    }
}

let samsung: Samsung = new Samsung("Samsung s24 ultra", "Samsung", 200, 5000, 1200)

// console.log(samsung);


// 3
class Computer {
    brand: string;
    model: string;
    processor: string;

    constructor( brand: string, model: string, processor: string) {
        this.brand = brand;
        this.model = model;
        this.processor = processor;
    }3
}

class Lenovo extends Computer {
    ram: number;
    memory: number;
    constructor( brand: string, model: string, processor: string, ram: number, memory: number ) {
        super(brand, model, processor)
        this.ram = ram;
        this.memory = memory;
    }
}


let lenovo: Lenovo = new Lenovo("Lenovo", "ThinkPad X1 Carbon", "Intel Core i7", 16, 512)

// console.log(lenovo);


// ===== Abstraction =====

abstract class ArithmeticOperations {
    abstract getArea(): number
}

//1
class Rect extends ArithmeticOperations {
    w: number
    h: number
    constructor(w: number,  h: number) {
        super();
        this.w = w
        this.h = h
    }

    getArea(): number {
        return this.w * this.h;
    }
}

const rect:Rect = new Rect(12, 20);
// console.log(rect.getArea()); 

//2
class Circle extends ArithmeticOperations {
    r: number
    constructor( r: number) {
        super();
        this.r = r
    }

    getArea(): number {
        return Math.floor(Math.PI * this.r * this.r)
    }
}

const circle: Circle = new Circle(45);
// console.log(circle.getArea());

// 3 
class Parallelepiped extends ArithmeticOperations {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea(): number {
        return 2 * (this.a * this.b + this.a * this.c + this.b * this.c);
    }
}

const parallelepiped: Parallelepiped = new Parallelepiped(2, 12, 43);
// console.log(parallelepiped.getArea());

// ===== Polymorphism =====

// 1

class MathAdd{
    action(a:number ,b:number):number;
    action(a:string ,b:string):string;
    action(a:any ,b:any):any{
        return a + b
    }
}

class addNumber extends MathAdd{
    constructor(){
        super()
    }
    action(a: any, b: any) {
        return a + b
    }
}

let addNum:addNumber = new addNumber()
// console.log(addNum.action(4, 5));


// 2

class MathAdd2{
    action(a:string ,b:string):string {
        return a.concat(b)
    };
}

class AddStr extends MathAdd2{
    constructor(){
        super()
    }
    action(a: string, b: string) {
        return a.concat(b)
    }
}

let addStr:AddStr = new AddStr()
// console.log(addStr.action("hello", "world"));


// 3
class MathAdd3{
    action(a:number ,b:number):number {
        return a * b
    };
}

class increaseNum extends MathAdd3{
    constructor(){
        super()
    }
    action(a: number, b: number) {
        return a * b
    }
}

let addNum3:increaseNum = new increaseNum()
// console.log(addNum3.action(12, 43));