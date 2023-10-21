


//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, 
//but each message should be personalized with the person’s name.


{ //brackets to create a scope to resolve the variable name conflict
    //as the same name array variable also exists in names.ts throws error. 

    let anArray = ["friend1", "friend2", "friend3", "friend4"];
    console.log(anArray[1]);

}


// let arr = anArray; throws reference error which is strange because it throws error 
// when variable name "anArray" is used and tells us that "cannot redeclare block scoped variable"
// which means that it knows this same variable exists somewhere in other file but won't reference to it
    