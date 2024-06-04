//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let myname: string = " muqarrab missam";
console.log(myname.toLowerCase());
console.log(myname.toUpperCase());
console.log(myname.replace(/\b\w/g,(char) => char.toUpperCase()));
