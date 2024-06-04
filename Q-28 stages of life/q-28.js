"use strict";
let personage = 38;
if (personage < 2) {
    console.log("You are a Baby.");
}
else if (personage >= 2 && personage < 4) {
    console.log("You are a Toddler.");
}
else if (personage >= 4 && personage < 13) {
    console.log("You are a Kid.");
}
else if (personage >= 13 && personage < 20) {
    console.log("You are a Teenager.");
}
else if (personage >= 20 && personage < 65) {
    console.log("You are a Adult");
}
else if (personage >= 65) {
    console.log("You are a Elder");
}
