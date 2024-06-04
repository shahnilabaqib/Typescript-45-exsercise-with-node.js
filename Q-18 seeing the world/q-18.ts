// array in its orignal order
let places : string[] = ["Makkah","Alaska","Berlin","Madina","Dubai",];

//Prints orignal order
console.log("Orignal order", places);

// prints Alphabatical Order
console.log("Alphabatical order:",[...places].sort());

//still has same order
console.log("Orignal order", places);

//reverse alphabatical order
console.log("Reverse Alphabatical order:",[...places].reverse());

//still has same order
console.log("Orignal order", places);

//reverse again on orignal order it again
console.log("reverse on orignal", places.reverse());

// checking orignal order has been changed
console.log("Orignal order changed", places);

// reverse again to back in its orignal  order
console.log("back on orignal orignal", places.reverse());



