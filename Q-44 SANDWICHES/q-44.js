"use strict";
// Define a function with a rest parameter that accepts items arguments representing our sandwiches
function makeSandwich(...items) {
    console.log("\nMaking a sendwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Enjoy Your Sandwich!");
}
// calling function with 3 different arguments
makeSandwich("Bread", "butter", "chicken", "cheese");
makeSandwich("Bread", "Mayo", "chicken", "cheese", "Egg");
makeSandwich("Bread", "Mayo", "chicken", "cheese", "Egg", "lettuce", "Tomatto");
