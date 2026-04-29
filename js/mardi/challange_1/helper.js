export {
  checkType,
  response,
  checkTime,
  songLong,
  responseOneObj,
  changeTime,
  change,
  responseArray,
  splite,
  sum,
};

function response(variable) {
  const para = document.createElement("p");
  para.textContent = variable;
  container.appendChild(para);
}

function changeTime(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].duree = change(arr[i].duree);
  }
  return arr;
}

function change(enter) {
  let time = enter / 60;
  let min = Math.floor(time);
  let sec = Math.round((time - min) * 100);
  return min + ":" + sec;
}

function responseArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    response(`======= ${i + 1} ======`);
    responseOneObj(arr[i]);
  }
}
function responseOneObj(obj) {
  response("titre: " + obj.titre);
  response("artiste: " + obj.artiste);
  response("duree: " + obj.duree+ " min");
  response("genre: " + obj.genre);
}
function splite(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].duree);
  }
  return result;
}
function sum(list) {
  let result = list.reduce((total, value) => total + value, 0);
  return result;
}
function songLong(list) {
  let durees = splite(list);
  let sorted = durees.sort((a, b) => b - a);
  let songLong = list.find(({ duree }) => duree == sorted[0]);
  return songLong;
}
function checkTime(arr, time) {
  time *= 60;
  let moreThenSixMin = arr.filter((element) => element.duree > time);
  if (moreThenSixMin.length < 1) {
    return response("there is no song more then 6 min in the list");
  }
  return (moreThenSixMin = changeTime(moreThenSixMin));
}
function checkType(list, type) {
  let checkType = list.filter(({ genre }) => genre == type);
  if (checkType.length < 1) {
    return response(" this is no song in you playlist type Jazz");
  }
  response("we have some Jazz for you");
  responseArray(checkType);
}
function sortobj (list){
}
