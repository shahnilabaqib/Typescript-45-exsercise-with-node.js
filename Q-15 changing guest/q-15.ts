let guestlist: string[]= ["Gul","Moon","Samar","mahrukh","shahrukh"];

let absent = guestlist[0];

console.log(absent,"unable to come.");

guestlist.splice(0,1,"Nimra");

guestlist.forEach(Newguest => console.log(`Hi, ${Newguest},You are invited to Dinner.`));


