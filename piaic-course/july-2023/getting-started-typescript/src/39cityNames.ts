#!/usr/bin/env node

function cityCountry(city: string, country: string) {
  let cons = console.log(`${city}, ${country}`);
  return cons;
}

cityCountry("lahore", "pakistan");
cityCountry("Karachi", "pakistan");
cityCountry("Islamabad", "pakistan");
//City Names: Write a function called city_country() that
//takes in the name of a city and its country.
//The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
