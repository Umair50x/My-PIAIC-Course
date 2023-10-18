//nested loops in js


//For every loop we run all the child loops
//see the bottom

for (let i = 0; i < 3; i++) {
    
    console.log(`top loop ${i}`);

    for (let j = 0; j < 3; j++) {
        console.log(`child loop ${j}`)
        
    }
    
}

//the output:

// top loop 1
// child loop 0
// child loop 1
// child loop 2

// top loop 2
// child loop 0
// child loop 1
// child loop 2

// top loop 3
// child loop 0
// child loop 2
// child loop 2