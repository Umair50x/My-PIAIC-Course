//loops in JS

//For Loop

for (let i = 1; i <= 10; i++) {
    console.log(`Hey there ${i}`);    
}

for (let j = 0; j < 3; j++){
    console.log(`-Hey there ${j}`);    //run three times since it start at zero

}

for(let k = 1; k < 10; k++){
    console.log(k);
}


for (let l = 10; l >= 0; l--) {
    console.log(`reverse ${l}`);
    
}


for (let l = 10; l >= 0; l -= 2) {
    console.log(`-- ${l}`);
    
}


const arr = ["a1", "a2", "a3", "a4", "a5"];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}


