//functions in JS

//note parameters and arguments are interchangeably used in javascript
//but they are a small bit different
//see below

function greet(){
    console.log("hello world!");
}

greet();
//------------




function example(name: string){//parameters/arguments
    console.log("hello " + name);

    }

    // example();
    //the above will throw undefined because we haven't define an argument
    //to the parameter given to the function

example("1st: ahmed"); 

//-------------

function newFunc(str: string, num: number){//parameters

    console.log(`hello ${str} your number is ${num}`);

}
// newFunc(12 , "boy", 50);//this will work anyway BUT ts will notify an error
newFunc("second: Ahmed", 12);//arguments

//--------------

function newGreet(name: string, age: number){
    let message = `hello ${name} your age is ${age}`;
    return message //this will not output as we 
}

const msg = newGreet("ahmed", 26);
console.log(msg)




function calc(x:number, y:number){
    return x + y//this will complete the operation but won't tell us of course
    // console.log(x+y);// this will print the result of the operation
}

calc(12, 12);






