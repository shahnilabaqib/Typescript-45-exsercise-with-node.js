"use strict";
let current_users = ["Gul", "Moon", "SHANI", "Samar", "nimra",];
let new_users = ["Shahrukh", "Maharukh", "shakra", "shani", "nimra"];
new_users.forEach(new_oneuser => {
    let our_condition = current_users.some(current_oneusers => current_oneusers.toLowerCase() === new_oneuser.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_oneuser} is already taken!`);
    }
    else {
        console.log(`This username ${new_oneuser} is available.`);
    }
});
