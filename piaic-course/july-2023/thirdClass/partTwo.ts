


//Part two of the class

//using logical operators
// && AND opertor 
// || OR operator


let haveCoupanCode = true;
let billAmount = 1000;
let result = haveCoupanCode && billAmount >= 1000 ? "true hey yr" : "false hy yar"; 

        if (haveCoupanCode && billAmount >= 1000) {
            console.log("true hogya");
        } else {
            console.log("False hogya");
        }
console.log(result);



console.log("\n NEW \n");

let userIsSubscribed = false;
let totalBill = 10000;

// let result = userIsSubscribed || totalBill >= 900;
// console.log(result);

    if (userIsSubscribed || totalBill >= 20000) {
        console.log("YAY! Delivery charges waived!");
    } else {
        console.log("Sorry! Your delivery charges cannot be waived.");
    }

    let conditionalResult = userIsSubscribed || totalBill >= 2000 ? "YAY! Delivery charges waived!" : 
                "Sorry! Your delivery charges cannot be waived.";

    console.log(conditionalResult);