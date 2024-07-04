var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("TS homework");
// ===== Encapsulation =====
//1
var User = /** @class */ (function () {
    function User(fname, lname, age, password, username) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.password = password;
        this.username = username;
    }
    return User;
}());
var user = new User("John", "Doe", 21, "johndoe22", "johndoe22");
// console.log(user);
//2
var Student = /** @class */ (function () {
    function Student(fname, lname, teacher, classes) {
        this.fname = fname;
        this.lname = lname;
        this.teacher = teacher;
        this.classes = classes;
    }
    return Student;
}());
var student = new Student("John", "Doe", "Mike", "History and Math");
// console.log(student);
//3
var Car = /** @class */ (function () {
    function Car(name, brand, createdAt, hp, speed) {
        this.name = name;
        this.brand = brand;
        this.createdAt = createdAt;
        this.hp = hp;
        this.speed = speed;
    }
    return Car;
}());
var car = new Car("m5", "BMW", 2017, 650, 400);
// console.log(car);
// ===== Inheritance =====
// 1
var Car2 = /** @class */ (function () {
    function Car2(name, brand, createdAt) {
        this.name = name;
        this.brand = brand;
        this.createdAt = createdAt;
    }
    return Car2;
}());
var SuperCar = /** @class */ (function (_super) {
    __extends(SuperCar, _super);
    function SuperCar(name, brand, createdAt, hp, speed) {
        var _this = _super.call(this, name, brand, createdAt) || this;
        _this.hp = hp;
        _this.speed = speed;
        return _this;
    }
    return SuperCar;
}(Car2));
var car2 = new SuperCar("Gentra", "Chevrolet", 2015, 60, 240);
// console.log(car2);
// 2
var Phone = /** @class */ (function () {
    function Phone(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    return Phone;
}());
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung(name, brand, camera, battery, price) {
        var _this = _super.call(this, name, brand) || this;
        _this.camera = camera;
        _this.battery = battery;
        _this.price = price;
        return _this;
    }
    return Samsung;
}(Phone));
var samsung = new Samsung("Samsung s24 ultra", "Samsung", 200, 5000, 1200);
// console.log(samsung);
// 3
var Computer = /** @class */ (function () {
    function Computer(brand, model, processor) {
        this.brand = brand;
        this.model = model;
        this.processor = processor;
    }
    return Computer;
}());
var Lenovo = /** @class */ (function (_super) {
    __extends(Lenovo, _super);
    function Lenovo(brand, model, processor, ram, memory) {
        var _this = _super.call(this, brand, model, processor) || this;
        _this.ram = ram;
        _this.memory = memory;
        return _this;
    }
    return Lenovo;
}(Computer));
var lenovo = new Lenovo("Lenovo", "ThinkPad X1 Carbon", "Intel Core i7", 16, 512);
// console.log(lenovo);
// ===== Abstraction =====
var ArithmeticOperations = /** @class */ (function () {
    function ArithmeticOperations() {
    }
    return ArithmeticOperations;
}());
//1
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(w, h) {
        var _this = _super.call(this) || this;
        _this.w = w;
        _this.h = h;
        return _this;
    }
    Rect.prototype.getArea = function () {
        return this.w * this.h;
    };
    return Rect;
}(ArithmeticOperations));
var rect = new Rect(12, 20);
// console.log(rect.getArea()); 
//2
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.floor(Math.PI * this.r * this.r);
    };
    return Circle;
}(ArithmeticOperations));
var circle = new Circle(45);
// console.log(circle.getArea());
// 3 
var Parallelepiped = /** @class */ (function (_super) {
    __extends(Parallelepiped, _super);
    function Parallelepiped(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Parallelepiped.prototype.getArea = function () {
        return 2 * (this.a * this.b + this.a * this.c + this.b * this.c);
    };
    return Parallelepiped;
}(ArithmeticOperations));
var parallelepiped = new Parallelepiped(2, 12, 43);
// console.log(parallelepiped.getArea());
// ===== Polymorphism =====
// 1
var MathAdd = /** @class */ (function () {
    function MathAdd() {
    }
    MathAdd.prototype.action = function (a, b) {
        return a + b;
    };
    return MathAdd;
}());
var addNumber = /** @class */ (function (_super) {
    __extends(addNumber, _super);
    function addNumber() {
        return _super.call(this) || this;
    }
    addNumber.prototype.action = function (a, b) {
        return a + b;
    };
    return addNumber;
}(MathAdd));
var addNum = new addNumber();
// console.log(addNum.action(4, 5));
// 2
var MathAdd2 = /** @class */ (function () {
    function MathAdd2() {
    }
    MathAdd2.prototype.action = function (a, b) {
        return a.concat(b);
    };
    ;
    return MathAdd2;
}());
var AddStr = /** @class */ (function (_super) {
    __extends(AddStr, _super);
    function AddStr() {
        return _super.call(this) || this;
    }
    AddStr.prototype.action = function (a, b) {
        return a.concat(b);
    };
    return AddStr;
}(MathAdd2));
var addStr = new AddStr();
// console.log(addStr.action("hello", "world"));
// 3
var MathAdd3 = /** @class */ (function () {
    function MathAdd3() {
    }
    MathAdd3.prototype.action = function (a, b) {
        return a * b;
    };
    ;
    return MathAdd3;
}());
var increaseNum = /** @class */ (function (_super) {
    __extends(increaseNum, _super);
    function increaseNum() {
        return _super.call(this) || this;
    }
    increaseNum.prototype.action = function (a, b) {
        return a * b;
    };
    return increaseNum;
}(MathAdd3));
var addNum3 = new increaseNum();
// console.log(addNum3.action(12, 43));
