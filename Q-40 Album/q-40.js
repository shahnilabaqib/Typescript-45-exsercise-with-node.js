"use strict";
// making function named
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//caling three function and  3 variables with diffrent values
let album1 = make_album("Atif Aslam", "song 1");
let album2 = make_album("Ali Zafar", "song 2");
let album3 = make_album("Hadi kiyani", "song 3");
console.log(album1);
console.log(album2);
console.log(album3);
