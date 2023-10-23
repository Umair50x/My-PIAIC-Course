#!/usr/bin/env node

// import makeShirt from "./36tShirts.js";

function makeShirt(size = "Large", message = "I love TypeScript") {
  console.log(`T-shirt size: ${size}`);
  console.log(`Message: ${message}`);
}

// Make a large shirt with the default message
makeShirt();

// Make a medium shirt with the default message
makeShirt("Medium");

// Make a small shirt with a custom message
makeShirt("Small", "Small Shirt of mine");

// Large Shirts: Modify the make_shirt() function so that shirts
// are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.
