"use strict";
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`It is by efault size ${size} and the print message is ${message} on shirt`);
}
make_shirt();
make_shirt("Medium");
function make_shirt2(size = "Medium", message = "I love Python") {
    console.log(`It is by default size ${size} and the print message is ${message} on shirt`);
}
make_shirt("Small", "I love Python");
