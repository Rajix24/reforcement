import {moreThen, showList, responsse, calcule, total } from "./helpers.js";
const container = document.getElementById("container");

//    =====================  challange 1:  ================
let participent = ["younes rajix", "youssf rajix", "ahmad", "anour", "lamia"];
// showList(participent); all list

// responsse(participent[0]); //the fisrt one

// responsse(participent[participent.length -1]); // the last one

// responsse(participent.length);// how many participents

// participent.push("ali", "samir");//add this two
// showList(participent); //you can see here

//show the last one and deleted:
let lastOne = participent.filter(
  (name) => name == participent[participent.length - 1] && participent.pop(),
);
// responsse(lastOne);
// showList(participent);

// participent.shift();
// showList(participent);

//    =====================  challange 2:  ================

let note = [12, 8, 15, 6, 18, 9, 14];

let etudient = [
  {
    name: "younes rajix",
    note: 12,
    module: "math",
  },
  {
    name: "youssef rajix",
    note: 8,
    module: "math",
  },
  {
    name: "ahmad zanid",
    note: 15,
    module: "math",
  },
  {
    name: "anour rajix",
    note: 6,
    module: "math",
  },
  {
    name: "lamia rajix",
    note: 18,
    module: "math",
  },
  {
    name: "aymen rajix",
    note: 9,
    module: "math",
  },
  {
    name: "alaa rajix",
    note: 14,
    module: "math",
  },
];

// calcule(etudient, "valid");
// console.log(etudient[0].note);

// ==================== challange 3 ==================

const personne = {
  firstName: "younes",
  lastName: "rajix",
  age: 22,
  city: "ait_ourir",
  email: "rajix@gmial.com",
  latt: function () {
    console.log("that is test");
  },
};

// responsse(
//   "fist name is " +
//     personne.firstName +
//     " last name is " +
//     personne.lastName +
//     ", age " +
//     personne.age +
//     " he live in " +
//     personne.city,
// );

// ==================== challange 4 ==================

let article = [
  {
    title: "watre",
    price: 10,
    quantity: 2,
  },
  {
    title: "milk",
    price: 15,
    quantity: 5,
  },
  {
    title: "sure",
    price: 40,
    quantity: 5,
  },
  {
    title: "chess",
    price: 200,
    quantity: 4,
  },
  {
    title: "cheken",
    price: 100,
    quantity: 2,
  },
];

// total(article);

// ==================== challange 5 ==================

let student = [
  {
    firstName: "younes",
    lastName : "rajix",
    age: 19,
    avg: 18,
  },
  {
    firstName: "youssef",
    lastName : "rajix",
    age: 19,
    avg: 20,
  },
  {
    firstName: "ahmad ",
    lastName : "sone",
    age: 18,
    avg: 5,
  },
  {
    firstName: "anour ",
    lastName : "relando",
    age: 21,
    avg: 8,
  },
  {
    firstName: "lamia ",
    lastName : "mis",
    age: 19,
    avg: 11,
  },
  {
    firstName: "aymen ",
    lastName : "cina",
    age: 22,
    avg: 14,
  },
  {
    firstName: "alaa ",
    lastName : "rarbi",
    age: 19,
    avg: 8,
  },
];
// console.log(student);
moreThen(student, 12);