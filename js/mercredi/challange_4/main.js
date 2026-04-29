import { response } from "../../mardi/challange_1/helper.js";
import {showContacts, showCity, collectCityNumber, addData } from "./helper.js";
// import {} from "/mardi/challange_1/helper.js";
const container = document.getElementById("container");

const contacts = [
  {
    nom: "Younes Rajix",
    entreprise: "Tech Solutions",
    email: "younes.rajix@gmail.com",
    telephone: "+212600000001",
    ville: "Casablanca",
    adresse: {
      rue: "12 Rue Hassan II",
      code_postal: "20000",
      ville: "Casablanca",
      pays: "Maroc",
    },
  },
  {
    nom: "Sara Benali",
    entreprise: "Digital Agency",
    email: "sara.benali@gmail.com",
    telephone: "+212600000002",
    ville: "Rabat",
    adresse: {
      rue: "45 Avenue Mohammed V",
      code_postal: "10000",
      ville: "Rabat",
      pays: "Maroc",
    },
  },
  {
    nom: "Omar El Fassi",
    entreprise: "MarketPro",
    email: "omar.fassi@gmail.com",
    telephone: "+212600000003",
    ville: "Marrakech",
    adresse: {
      rue: "78 Boulevard Zerktouni",
      code_postal: "40000",
      ville: "Marrakech",
      pays: "Maroc",
    },
  },
  {
    nom: "Lina Karim",
    entreprise: "Startup Hub",
    email: "lina.karim@gmail.com",
    telephone: "+212600000004",
    ville: "Tanger",
    adresse: {
      rue: "9 Rue de la Liberté",
      code_postal: "90000",
      ville: "Tanger",
      pays: "Maroc",
    },
  },
  {
    nom: "Amine Boulahfa",
    entreprise: "WebCorp",
    email: "amine.boulahfa@gmail.com",
    telephone: "+212600000005",
    ville: "Casablanca",
    adresse: {
      rue: "21 Rue Atlas",
      code_postal: "30000",
      ville: "Fès",
      pays: "Maroc",
    },
  },
  {
    nom: "Nadia Zahra",
    entreprise: "Innovatech",
    email: "nadia.zahra@gmail.com",
    telephone: "+212600000006",
    ville: "Agadir",
    adresse: {
      rue: "67 Avenue Hassan I",
      code_postal: "80000",
      ville: "Agadir",
      pays: "Maroc",
    },
  }
];

// 1 :
// showCity(contacts);

// 2:
// for (let i = 0; i < contacts.length; i++) {
//     response('=====================');
//     response('name: '+ contacts[i].nom);
    
// }
// 3 :
// console.log( collectCityNumber(contacts));
// 4 :
// showContacts(contacts);
// 5 :
// contacts[0].adresse.rue = "mohamadia";
// showContacts(contacts);
//6:
// showContacts(addData(contacts));
// 7 :

