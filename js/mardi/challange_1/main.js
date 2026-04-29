import {
  checkType,
  response,
  songLong,
  responseOneObj,
  changeTime,
  change,
  responseArray,
  splite,
  sum,
  checkTime
} from "./helper.js";
const container = document.getElementById("container");

// ============== chalange 1 ====================

const songs = [
  { titre: "Blinding Lights", artiste: "The Weeknd", duree: 200, genre: "Pop" },
  { titre: "Shape of You", artiste: "Ed Sheeran", duree: 240, genre: "Jazz" },
  { titre: "Bohemian Rhapsody", artiste: "Queen", duree: 355, genre: "Rock" },
  { titre: "Lose Yourself", artiste: "Eminem", duree: 326, genre: "Rap" },
  { titre: "HUMBLE.", artiste: "Kendrick Lamar", duree: 177, genre: "Rap" },
  { titre: "One Dance", artiste: "Drake", duree: 173, genre: "Hip-Hop" },
  {
    titre: "Smells Like Teen Spirit",
    artiste: "Nirvana",
    duree: 301,
    genre: "Rock",
  },
  {
    titre: "Rolling in the Deep",
    artiste: "Adele",
    duree: 228,
    genre: "Soul",
  },
  { titre: "Bad Guy", artiste: "Billie Eilish", duree: 194, genre: "Pop" },
  {
    titre: "Stairway to Heaven",
    artiste: "Led Zeppelin",
    duree: 482,
    genre: "Rock",
  },
];

/*
 1:
show all the titles of songs
for (let i = 0; i < songs.length; i++) {
    response(songs[i].titre);
}
*/
// 2:
// const rock = songs.filter(element => element.genre == "Rock");
// responseArray(rock);

// 3:
// changeTime(songs);
// responseArray(songs);

// 4 :
// let time = change(sum(splite(songs)));
// response("total time is: " + time);

// 5:
// responseArray([songLong(songs)]);
//6:

// let moreThenSixMin = checkTime(songs, 6);
// response("there is songs more longer: ");
// responseArray(moreThenSixMin);

// 7:
// Check is Jazz Exist
// checkType(songs,  "Jazz");

// 8 :

// let data = songs.sort((a , b) => a.duree - b.duree );
// responseArray(changeTime(data));


