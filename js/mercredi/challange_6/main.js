import { response, showArray, showObj } from "../../Globle-functions/functions.js";
import { deffBut, OrdeByPoints, arrayToString, sumilerMatch,sumilerMatch5 } from "./helper.js";

// 1: 
const equipes = [
  {
    nom: "Lions FC",
    points: 18,
    buts_pour: 20,
    buts_contre: 10,
    matchs_joues: 8
  },
  {
    nom: "Tigers United",
    points: 15,
    buts_pour: 18,
    buts_contre: 12,
    matchs_joues: 8
  },
  {
    nom: "Eagles Club",
    points: 12,
    buts_pour: 14,
    buts_contre: 13,
    matchs_joues: 8
  },
  {
    nom: "Sharks FC",
    points: 20,
    buts_pour: 11,
    buts_contre: 15,
    matchs_joues: 8
  },
  {
    nom: "Wolves Team",
    points: 20,
    buts_pour: 22,
    buts_contre: 9, 
    matchs_joues: 8
  },
  {
    nom: "Dragons FC",
    points: 8,
    buts_pour: 10,
    buts_contre: 18,
    matchs_joues: 8
  },
  {
    nom: "Panthers Club",
    points: 14,
    buts_pour: 16,
    buts_contre: 14,
    matchs_joues: 8
  },
  {
    nom: "Falcons United",
    points: 14,
    buts_pour: 9,
    buts_contre: 20,
    matchs_joues: 8
  }
];

// 2 :
// showArray(deffBut(equipes));

//3 :
// showArray(OrdeByPoints(equipes));
//4 :
// arrayToString(equipes);
// 5 :
// showArray(sumilerMatch(equipes));
//6 :
// response("============== before ===========");
// showArray(sumilerMatch(equipes));
// response("================ After ==============")
// showArray(sumilerMatch5(equipes));  
