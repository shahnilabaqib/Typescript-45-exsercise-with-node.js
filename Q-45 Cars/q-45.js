"use strict";
// Defining function to make car objects with extra options.
function create_car(manufacturer, model, ...options) {
    // MAKING OBJECT
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Adding additional options to the object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
// Calling function to create an object
let my_car = create_car("Civic", "2022", "color: white", "Sunroof: True");
// Printing the value to ensure all the information is stored correctly in the car object.
console.log(my_car);
