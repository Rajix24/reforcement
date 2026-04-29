import { response } from "../../Globle-functions/functions.js";
export { deffBut, OrdeByPoints, arrayToString, sumilerMatch,sumilerMatch5};

function deffBut(list) {
  let arr = [];
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    let deffBut = {};
    deffBut["name"] = list[i].nom;
    deffBut["defferance"] = list[i].buts_pour - list[i].buts_contre;
    arr.push(deffBut);
  }
  return arr;
}

function OrdeByPoints(list) {
  let arr = [];
  list = list.sort((a, b) => b.points - a.points);
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i].points == list[i + 1].points) {
      arr.push(howScoreMore(list[i], list[i + 1]));
      //   arr.push(list[i]);
      //   arr.push(list[i + 1]);
    }
  }
  return console.log(arr);
}
function howScoreMore(obj1, obj2) {
  let obj = {};
  obj["points"] = obj1.points;
  if (obj1.buts_pour > obj2.buts_pour) {
    obj["howScoreMore"] = obj1.nom;
    obj["defferance"] = obj1.buts_pour - obj2.buts_pour;
  }
  if (obj1.buts_pour < obj2.buts_pour) {
    obj["howScoreMore"] = obj2.nom;
    obj["defferance"] = obj2.buts_pour - obj1.buts_pour;
  }
  if (obj1.buts_pour < obj2.buts_pour) {
    obj["howScoreMore"] = "the same";
    obj["defferance"] = 0;
  }
  return obj;
}

function arrayToString(list) {
  let diff = 0;
  for (let i = 0; i < list.length; i++) {
    diff = list[i].buts_contre - list[i].buts_pour;
    response(
      i + " " + list[i].nom + "" + list[i].points + " pts ",
      "deff(" + diff + ")",
    );
  }
}

function sumilerMatch(equip) {
  let obj = {};
  let goals1 = Math.floor(Math.random() * 10);
  let goals2 = Math.floor(Math.random() * 10);
  if (goals1 > goals2) {
    equip[1].buts_pour += goals1;
    equip[1].buts_contre += goals2;
    equip[2].buts_pour += goals2;
    equip[2].buts_contre += goals1;
    obj["winer"] = equip[1];
    obj["loser"] = equip[2];
    obj["winer_goals"] = goals1;
    obj["loser_goals"] = goals2;
  }
  if (goals2 > goals1) {
    equip[1].buts_pour += goals1;
    equip[1].buts_contre += goals2;
    equip[0].buts_pour += goals2;
    equip[0].buts_contre += goals1;
    obj["winer"] = equip[1];
    obj["loser"] = equip[2];
    obj["winer_goals"] = goals1;
    obj["loser_goals"] = goals2;
  }
  if (goals1 == goals2) {
    equip[1].buts_pour += goals1;
    equip[1].buts_contre += goals2;
    equip[0].buts_pour += goals2;
    equip[0].buts_contre += goals1;
    obj["equal"] = "team has the same goals";
    obj["team 1"] = goals1;
    obj["team 2"] = goals2;
  }

  return [equip, obj];
}

function sumilerMatch5(list) {
  let test;
  for (let i = 0; i < 5; i++) {
    test = sumilerMatch(list);
  } 
  console.log(test[0]); 
 return test;
}
