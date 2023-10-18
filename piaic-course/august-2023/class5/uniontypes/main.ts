//union types in typescripts

//unions are when using the OR operator and literals are when using your own explicit literal
//when mixed it's called union literals
let unionvar: number | string;

//union literals

let trafficLight: "yellow" | "red" | "green" = "red";
//basically anything can explicitly be assinged to the variable

// trafficLight = "";

// const will take the value as it's literal type since const will not change after

//learn union type and literals later

//objects downwards

let teacher = {
  "first-name": "hamzah",
  exp: "05",
};

console.log(teacher["first-name"]);

//made some crazy mistakes in outDir and rootDir. Mitigate them

interface isStd {
  name: string;
  age: number;
}

let stdOne: isStd = {
  name: "ahmed",
  age: 26,
};
console.log(typeof stdOne);
