function make_shirt(size: string= "Large", message : string= "I love TypeScript"){
    console.log(`It is by efault size ${size} and the print message is ${message} on shirt`);
}

make_shirt();
make_shirt("Medium");

function make_shirt2(size: string= "Medium", message : string= "I love Python"){
    console.log(`It is by default size ${size} and the print message is ${message} on shirt`);
}

make_shirt("Small", "I love Python");
