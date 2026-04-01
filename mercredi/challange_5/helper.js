import { response,  } from "../../mardi/challange_1/helper.js";
export { seuil, valueCategory, show, totlStock, showObject, checkDomand };

function show(list) {
  const keys = Object.keys(list[0]);
  for (let i = 0; i < list.length; i++) {
    response(" ================ " + (i + 1) + "===============");
    for (let j = 0; j < keys.length; j++) {
      let value = list[i][keys[j]];
      if (typeof value === "object") {
        showAddress(value);
      } else {
        response(keys[j] + ":  " + value);
      }
    }
  }
}
function totlStock(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i].quantite * list[i].prix_unitaire;
  }
  return total;
}
function valueCategory(list) {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    let category = list[i].categorie;
    if (!obj[category]) {
      obj[category] = 0;
    }
    obj[category] += list[i].prix_unitaire;
  }
  return obj;
}
/*
{ 
nom: "Eau",
 quantite: 100,
  unite: "litres",
   prix_unitaire: 0.3,
    seuil_alerte: 20,
categorie: "boisson"
}
*/
function showObject(obj) {
  let keys = Object.keys(obj);
  response("====== category ======");
  for (let x = 0; x < keys.length; x++) {
    response(keys[x] + " " + obj[keys[x]]);
  }
}
function checkDomand(list, nom, quantity) {
  let item = list.find((element) => element.nom == nom);
  if (!item) {
    return response("============ The commnand is not exist ============");
  }
  if (item.quantite < quantity) {
    return response("============ We Don't have enought quantity of " +item.nom +" ============",);
  }
  return response("=======  you Domand are seccsess");
}
function seuil(list) {
//   let item = list.find((element) => element.nom == nom);
    let neded = [];
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        if (list[i].seuil_alerte > list[i].quantite) {
            neded.push(list[i]);
        }
    }
    return neded;
}
