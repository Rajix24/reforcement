import {resume, longComment, avgRate, howManyRates, showObj, filterRating, showArray } from "./helper.js";
import {  } from "../challange_2/helper.js";
import { response } from "../challange_1/helper.js";
const container = document.getElementById("container");
const reviews = [
    { username: "sara", rating: 4, comment: "Very good", date: '2026-01-11' },
    { username: "younes", rating: 3, comment: "It was okay", date: '2026-01-12' },
    { username: "ali", rating: 5, comment: "Amazing recipe! aaaaaaaaaaaaaaaaaaaa", date: '2026-01-10' },
  { username: "amina", rating: 5, comment: "Loved it!", date: '2026-01-13' },
  { username: "karim", rating: 2, comment: "Not great", date: '2026-01-14' },
  { username: "fatima", rating: 1, comment: "Nice taste", date: '2026-01-15' },
  { username: "mehdi", rating: 1, comment: "Bad recipe", date: '2028-04-16' },
  { username: "salma", rating: 5, comment: "Perfect!", date: '2026-01-17' },
  { username: "hassan", rating: 3, comment: "Average", date: '2026-01-18' },
  { username: "lina", rating: 4, comment: "Pretty good", date: '2026-01-19' },
  { username: "omar", rating: 2, comment: "Too salty", date: '2026-01-20' },
  { username: "nora", rating: 5, comment: "Excellent!", date: '2026-01-21' },
  { username: "rachid", rating: 5, comment: "S", date: '2026-01-24'},
  { username: "zakaria", rating: 3, comment: "Not bad", date: '2026-01-22' },
  { username: "aya", rating: 4, comment: "Good recipe", date: '2026-01-23' }
];
// 1: 
// response("Avg of rating : " + avgRate(reviews));
// 2:
// console.log(howManyRates(reviews));
// 3:
/*
let test = filterRating(reviews);
let arr = ['more then 3', "less then 4"]
for (let i = 0; i < test.length; i++) {
    response("===========  "+ arr[i] +" ==============");
    for (let j = 0; j < test[i].length; j++) {
        response("=====    =======");
        showObj(test[i][j]);
    }
}   
*/
//4 :
// let sorted = reviews.sort((a,b) => new Date(b.date) - new Date(a.date));
// showArray(sorted);

// 5 :
// longComment(reviews);
// 6 :
// resume(reviews);
