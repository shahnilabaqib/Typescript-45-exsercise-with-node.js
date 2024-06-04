"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (let one_number of numbers) {
    let ordinalending;
    if (one_number === 1) {
        ordinalending = "st";
    }
    else if (one_number === 2) {
        ordinalending = "2nd";
    }
    else if (one_number === 3) {
        ordinalending = "3rd";
    }
    else {
        ordinalending = "th";
    }
    console.log(`${one_number}${ordinalending}`);
}
;
