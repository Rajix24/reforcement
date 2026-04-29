export {
    sameMois,
  augmtationMonth,
  showCitys,
  allCitys,
  totalChifferAffaires,
  bestSelesMonth,
  responseArray2,
  responseOneObj2,
  moreThen,
  lowSelesMonth,
};
import { response } from "../challange_1/helper.js";
function totalChifferAffaires(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].chiffre_affaires;
  }
  return result;
}

function bestSelesMonth(list) {
  let best = list.sort((a, b) => b.chiffre_affaires - a.chiffre_affaires);
  return best[0];
}
function lowSelesMonth(list) {
  let low = list.sort((a, b) => a.chiffre_affaires - b.chiffre_affaires);
  return low[0];
}
function responseOneObj2(obj) {
  response("mois: " + obj.mois);
  response("chiffre_affaires: " + obj.chiffre_affaires);
  response("nb_clients: " + obj.nb_clients);
  response("ville: " + obj.ville);
}

function moreThen(list, num) {
  let hight = list.filter((element) => element.chiffre_affaires > num);
  return hight;
}
function responseArray2(arr) {
  for (let i = 0; i < arr.length; i++) {
    response(`======= ${i + 1} ======`);
    responseOneObj2(arr[i]);
  }
}

function allCitys(list) {
  let count = {};
  list.forEach(({ ville }) => {
    count[ville] = (count[ville] || 0) + 1;
  });
  return count;
}
function showCitys(obj) {
  let keys = Object.keys(obj);
  response("=====  citys  ||  clients ======");
  for (let i = 0; i < keys.length; i++) {
    response("_____" + keys[i] + "   ||_____" + obj[keys[i]] + "       ");
  }
}
function augmtationMonth(list) {
  let arr = [];
  console.log(list);
  for (let i = 1; i < list.length; i++) {
    // console.log(list[i - 1].chiffre_affaires);
    // let test = list[i].chiffre_affaires / list[i - 1].chiffre_affaires * 100;
    // console.log(test);
    arr.push((list[i].chiffre_affaires / list[i - 1].chiffre_affaires) * 100);
  }
  return arr;
}
function sameMois(list) {
  // for (let i = 0; i < list.length; i++) {
  // console.log(list[i]);
  // }
  let arr = []
  let obj = {};
  list.forEach(({ moi }) => {
    obj[moi] = moi;
    obj[chiffre_affaires] = chiffre_affaires
    arr.push(obj);
  });
  
  return arr
}
