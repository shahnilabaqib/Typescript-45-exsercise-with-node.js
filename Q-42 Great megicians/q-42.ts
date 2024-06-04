// creating magician name in array 

function show_magicians(megicians: string[]){
    megicians.forEach(name => console.log(name));

}
 function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
 }

// magicians name in array

let magician_name: string[] = ["Saamri","john","Herry Portar"];
 
let great_magicians = make_great(magician_name);
 
show_magicians(great_magicians);