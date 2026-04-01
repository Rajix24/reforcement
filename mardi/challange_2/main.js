import {
  totalChifferAffaires,
  bestSelesMonth,
  responseOneObj2,
  lowSelesMonth,
  moreThen,
  responseArray2,
  allCitys,
  showCitys,
  augmtationMonth,
  sameMois,
} from "./helper.js";
import { response, responseOneObj } from "../challange_1/helper.js";
const container = document.getElementById("container");

const seles = [
  { mois: 1, chiffre_affaires: 12400, nb_clients: 310, ville: "Paris" },
  { mois: 1, chiffre_affaires: 9800, nb_clients: 245, ville: "Lyon" },
  {
    mois: 2,
    chiffre_affaires: 15200,
    nb_clients: 380,
    ville: "Marseille",
  },
  { mois: 4, chiffre_affaires: 13700, nb_clients: 342, ville: "Paris" },
  { mois: 6, chiffre_affaires: 18300, nb_clients: 457, ville: "Bordeaux" },
  { mois: 3, chiffre_affaires: 21000, nb_clients: 525, ville: "Lyon" },
  { mois: 2, chiffre_affaires: 24500, nb_clients: 612, ville: "Paris" },
  {
    mois: 1,
    chiffre_affaires: 22100,
    nb_clients: 553,
    ville: "Marseille",
  },
  {
    mois: 10,
    chiffre_affaires: 17600,
    nb_clients: 440,
    ville: "Bordeaux",
  },
  { mois: "Octobre", chiffre_affaires: 14900, nb_clients: 372, ville: "Lyon" },
  {
    mois: 11,
    chiffre_affaires: 19800,
    nb_clients: 495,
    ville: "Paris",
  },
  {
    mois: 12,
    chiffre_affaires: 28600,
    nb_clients: 715,
    ville: "Marseille",
  },
];
// 1:
// response("total is : "+totalChifferAffaires(seles));
// 2:
// let avg = totalChifferAffaires(seles) / seles.length;
// response("avg chiffer d'affires est : " + avg);
// 3:
// response("=====  month tha have the best seles is  =======");
// responseOneObj2(bestSelesMonth(seles));
//4:
// response("=====  month tha have the lowest seles is:  =======");
// responseOneObj2(lowSelesMonth(seles));
// 5:
/*
let more = moreThen(seles, 5000)
if (more.length < 1) {
    response("no month has make that seles");
}else{
    responseArray2(more);
}
*/

// 6:
// showCitys(allCitys(seles));

// 7:
// const sorted = seles.sort((a ,b) => a.chiffre_affaires - b.chiffre_affaires);
// responseArray2(sorted);

// 8:

// console.log(augmtationMonth(seles));
sameMois(seles);    
