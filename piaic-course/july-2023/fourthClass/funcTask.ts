//4th class function task for students
//
//create a typescript function checkEvenOrOdd() that returns "even" if num is even 
// -and "odd" if num is Odd.
//
// Call the function with 7, and log the results.

function EvenOdd(x:number){
    // let result = x % 2 === 0 ? "even" : "odd"; 
    // return result;

    if(x % 2 === 0){
        console.log("even");
    } else { 
        console.log("odd");
    }

}

EvenOdd(31);
EvenOdd(22);


