class Student {
  name: string;
  roll: number;
  static seatNum: number = 0;
  //   seatNum: number = 0;

  constructor(name: string, roll: number) {
    this.name = name;
    this.roll = roll;
    Student.seatNum += 1;
  }
}

let std1 = new Student("ahmed", 123);
let std2 = new Student("ahmed", 123);
let std3 = new Student("ahmed", 123);
let std4 = new Student("ahmed", 123);
console.log(Student.seatNum); //static property will not reset on each new object instanciated
console.log(std4.seatNum); //this will not increment the value of seatNum cos' the class's structure is the same
//everytime a new object in instanciated
