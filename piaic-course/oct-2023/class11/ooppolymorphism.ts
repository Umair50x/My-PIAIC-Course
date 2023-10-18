class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.address = address;
    this.age = age;
    this.name = name;
  }

  eat(pulao: boolean) {
    console.log("i m groot");
  }
}

class Teacher extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
  eat() {
    console.log("Burger Khaonga");
    // super.eat(true);
  }
}

let oneTeacher = new Teacher("ali", 123, "ghar py");
oneTeacher.eat(true);
let oneStd = new Student("ali", 123, "ghar py");
oneStd.eat();
