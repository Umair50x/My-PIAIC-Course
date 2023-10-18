class nameClass {
  //access modifiers
  private _length = 0;

  get length() {
    //getter method to access/get special object properties
    return this._length;
  }

  set length(value) {
    //setters take one param and cannot return a value
    if (value > 10) {
      this._length = value;
    }
  }
}
let nameC = new nameClass();
nameC.length = 110;
console.log(nameC.length);

//getter setters are methods that are less computational power consumer
//they also let us play with the private encapsulated data present in a class
//private properties are not exposed via the object/class property accessor

class Person {
  protected name: string = "okasha";
}

class Lecturer extends Person {
  avaiMethod() {
    //setter
    this.name = "hamza";
  }
  displayName() {
    //getter
    return this.name; //private prop can only be accessed within it's own class
  }
}
let lecturer1 = new Lecturer();
lecturer1.name = "hamza"; //overrode
//but only accessible in it's own or subclasses
console.log(lecturer1.displayName());
console.log(lecturer1.avaiMethod());