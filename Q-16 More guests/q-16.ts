// array of guest list
let guestlist : string[] = ["Gul","Ali", "Moon","Samar","Maharukh",];

// variable absent guest
let abasent = guestlist[1];

console.log(abasent, "unable to come.");

// add or remove new guest
guestlist.splice(1,2,"Nimra");

console.log("Good News! We have arranged big table.");

// adding new guest in beggining
guestlist.unshift("Tasneem");

// adding new guest in end
guestlist.push("Shakra")

//calculte middle value in array
let middleguest= Math.floor(guestlist.length/2);

// adds new guest in array
guestlist.splice(middleguest,0,"shani");

// prints message individualy in array
guestlist.forEach(updatedlist => console.log(`Hello,${updatedlist}, you all invited to Dinner. `))
