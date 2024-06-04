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
let great_magicians = make_great(magician_name);
show_magicians(great_magicians);
