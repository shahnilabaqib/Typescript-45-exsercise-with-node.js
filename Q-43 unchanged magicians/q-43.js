"use strict";
// creating magician name in array 
function show_magicians(megicians) {
    megicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// magicians name in array
let magician_name = ["Saamri", "john", "Herry Portar"];
// Making a copy or orignal array through slice() function
let copy_magician_name = magician_name.slice();
// modify copied array to add "The Great" with their names.
let copy_great_magician = make_great(copy_magician_name);
//calling functions
show_magicians(magician_name);
show_magicians(copy_great_magician);
