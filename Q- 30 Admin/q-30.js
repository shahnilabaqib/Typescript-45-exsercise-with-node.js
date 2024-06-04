"use strict";
let Username = ["Gul", "Moon", "Samar", "Admin", "Nimra"];
Username.forEach(Oneuser => {
    if (Oneuser === "Admin") {
        console.log(`Hello ${Oneuser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${Oneuser}, thank you for logging in again.`);
    }
});
