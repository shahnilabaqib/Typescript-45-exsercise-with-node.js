// array of guest list
let guestlist : string[] = ["Gul","Ali", "Moon","Samar","Maharukh",];

// variable absent guest
let abasent = guestlist[1];

console.log(abasent, "is unable to come.");

// add or remove new guest
guestlist.splice(1,0,"Nimra");

console.log("Good News! We have arranged big table.");

// adding new guest in beggining
guestlist.unshift("Tasneem");

// adding new guest in end
guestlist.push("Shakra")

//add new guest in middle
let middleguest= Math.floor(guestlist.length/2);

// ads new guest in middle
guestlist.splice(middleguest,0,"shani");

// prints msg to each guest separatly
guestlist.forEach(updatedlist => console.log(`Hello,${updatedlist}, you all invited to Dinner. `))

// message again to invite only 2 guests
console.log("Unfortunatly, We can't arranged the big table so, we can invite only two guests.");

// remove guest 1 by 1 so only 2 remains
while(guestlist.length> 2){let removeguestlist = guestlist.pop();
    console.log(`Sorry ${removeguestlist}, you are not invited.`)
}
guestlist.forEach(lastguests => console.log(`Good news, ${lastguests}, you are still invited.`));
//removing last two guests
guestlist.pop()
guestlist.pop()
guestlist.pop()

// list become empty
console.log(guestlist);
