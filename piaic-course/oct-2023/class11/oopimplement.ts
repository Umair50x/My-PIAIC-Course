interface iPerson {
  name: string;
}
type i1Person = {
  age: number;
};
class Person implements i1Person, iPerson {
  name!: string;
  age!: number;
}

let person1: Person = new Person();
person1.name;
person1.age;

let person2: i1Person = new Person();
person2.age;
