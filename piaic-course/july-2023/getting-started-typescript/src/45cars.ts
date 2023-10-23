#!/usr/bin/env node

function createCar(manufacturer: string, model: string, ...options: any[]) {
  const car = {
    manufacturer,
    model,
  };

  for (let i = 0; i < options.length; i += 2) {
    const key = options[i];
    const value = options[i + 1];
    car[key] = value;
  }

  return car;
}

const carInfo = createCar("Kia", "Stinger", "color", "Red", "year", 2020);

console.log(carInfo);

//Cars: Write a function that stores information about a car in a Object.
//The function should always receive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments.
//Call the function with the required information and two other name-value pairs,
//such as a color or an optional feature. Print the Object that’s
//returned to make sure all the information was stored correctly.
