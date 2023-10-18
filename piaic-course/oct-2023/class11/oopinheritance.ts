class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

class Teacher extends Person {
  salary: number;
  constructor(salary: number, name: string, age: number, address: string) {
    super(name, age, address);
    this.salary = salary;
  }
}

let teacher1 = new Teacher(70000, "ahmed", 34, "karachi east");
console.log(teacher1); //prints an obj of all the arg/properties

console.log(teacher1.address);
console.log(teacher1.salary);
console.log(teacher1.age);
console.log(teacher1.name);

//below is just to mitigate the readability in constructor function's parameters list
class goodTeacher extends Person {
  salary: number;
  constructor({
    salary,
    name,
    age,
    address,
  }: {
    salary: number;
    name: string;
    age: number;
    address: string;
  }) {
    super(name, age, address);
    this.salary = salary;
  }
}

let dummyTeacher = new goodTeacher({
  salary: 50000,
  name: "ali",
  age: 30,
  address: "karachi central",
});

console.log(dummyTeacher);

//the below with throw an error because all properties in a class is in a special object called "this"
//when the program tried finding x it only found let x: number = 123 because the x: string = "hey there"
//does not exist yet because this.object hasn't been called

let x: number = 123;

class Dummy {
  x: string = "hey there";
  dummy() {
    // x = "dude!"; //assign error
  }
}
