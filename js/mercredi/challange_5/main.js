import { showArray } from "../../Globle-functions/functions.js";
import { seuil, show, totlStock,valueCategory, showObject,checkDomand } from "./helper.js";
const container = document.getElementById("container");
// 1 :
const ingredients = [
  { nom: "Tomate", quantite: 50, unite: "kg", prix_unitaire: 2.5, seuil_alerte: 10, categorie: "légume" },
  { nom: "Carotte", quantite: 30, unite: "kg", prix_unitaire: 1.4, seuil_alerte: 8, categorie: "légume" },
  { nom: "Oignon", quantite: 9, unite: "kg", prix_unitaire: 1.8, seuil_alerte: 10, categorie: "légume" },

  { nom: "Poulet", quantite: 25, unite: "kg", prix_unitaire: 6.5, seuil_alerte: 5, categorie: "viande" },
  { nom: "Boeuf", quantite: 20, unite: "kg", prix_unitaire: 9.2, seuil_alerte: 5, categorie: "viande" },
  { nom: "Agneau", quantite: 15, unite: "kg", prix_unitaire: 11.0, seuil_alerte: 4, categorie: "viande" },

  { nom: "Sel", quantite: 10, unite: "kg", prix_unitaire: 0.5, seuil_alerte: 2, categorie: "épice" },
  { nom: "Poivre", quantite: 8, unite: "kg", prix_unitaire: 3.2, seuil_alerte: 2, categorie: "épice" },
  { nom: "Paprika", quantite: 6, unite: "kg", prix_unitaire: 2.8, seuil_alerte: 1, categorie: "épice" },

  { nom: "Eau", quantite: 100, unite: "litres", prix_unitaire: 0.3, seuil_alerte: 20, categorie: "boisson" },
  { nom: "Jus d'orange", quantite: 50, unite: "litres", prix_unitaire: 2.0, seuil_alerte: 10, categorie: "boisson" },
  { nom: "Lait", quantite: 60, unite: "litres", prix_unitaire: 1.2, seuil_alerte: 15, categorie: "boisson" }
];

// 2 :
const sort = ingredients.sort((a,b) => a.seuil_alerte - b.seuil_alerte);
// response('the less seuit_alerte');
// show(sort);
// 3:
// response( " value of stock is:  " + totlStock(ingredients));
// 4:
// showObject(valueCategory(ingredients));
// 5:
// checkDomand(ingredients, "Tomate", 75);
// 6:
// showArray(seuil(ingredients));
//7:
  