"use strict";
// users list
let Username = ["Gul", "Moon", "Samar", "Admin", "Nimra"];
// now users list is empty
Username = [];
//checking list lenght
if (Username.length === 0) {
    console.log(" We need to find some users!");
}
else {
    Username.forEach(Oneuser => {
        if (Oneuser === "Admin") {
            console.log(`Hello ${Oneuser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${Oneuser}, thank you for logging in again.`);
        }
    });
}
