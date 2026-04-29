export { moreThen, showList, responsse, calcule, total };

function calcule(arr, operator) {
  switch (operator) {
    case "sum":
      responsse("result is : " + sum(arr));
      break;
    case "avg":
      responsse("avg is : " + avg(arr));
      break;
    case "max":
      responsse("first student in class is: ");
      responsseObject(max(arr));
      break;
    case "min":
      responsse("last student in class is: ");
      responsseObject(min(arr));
      break;
    case "valid":
      let valideStudens = valide(arr);
      for (let i = 0; i < valideStudens.length; i++) {
        responsse("==== student " + (i + 1) + " =======");
        responsseObject(valideStudens[i]);
      }
      break;
    default:
      responsse(
        "operator in wrong the possile that you can enter is this sum, avg valid, max, min",
      );
      break;
  }
}

function showList(arr) {
  for (let i = 0; i < arr.length; i++) {
    const para = document.createElement("p");
    para.textContent = arr[i];
    container.appendChild(para);
  }
}

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].note;
  }
  return result;
}
function avg(arr) {
  return sum(arr) / arr.length;
}
function max(arr) {
  let notes = getNote(arr);
  let max = notes.sort((a, b) => b - a);
  let topStudent = arr.find((student) => student.note == max[0]);
  return topStudent;
}
function min(arr) {
  let notes = getNote(arr);
  let min = notes.sort((a, b) => a - b);
  let lastStudent = arr.find((student) => student.note == min[0]);
  return lastStudent;
}
function valide(arr) {
  let valideStudents = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].note >= 10) {
      valideStudents.push(arr[i]);
    }
  }
  return valideStudents;
}
function getNote(arr) {
  let notes = [];
  for (let i = 0; i < arr.length; i++) {
    notes.push(arr[i].note);
  }
  return notes;
}
function responsseObject(obj) {
  responsse("name:  " + obj.name);
  responsse("note:  " + obj.note);
  responsse("module:  " + obj.module);
}

function responsse(variable) {
  const para = document.createElement("p");
  para.textContent = variable;
  container.appendChild(para);
}

function tva(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].price *= 1.2;
  }
  return array;
}

function total(arrary) {
  let arr = tva(arrary);
  for (let i = 0; i < arr.length; i++) {
    responsse(
      arr[i].title +
        " * " +
        arr[i].quantity +
        " = " +
        arr[i].quantity * arr[i].price,
    );
  }
}

function moreThen(list, num) {
  let avgs = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].avg >= num) {
      avgs.push(list[i]);
    }
  }
  return responsseArrOfObject(avgs);
}

function responsseArrOfObject(arr) {
  for (let i = 0; i < arr.length; i++) {
    responsse(`============== student${i + 1} ===========`);
    responsse("fisrst mane is: " + arr[i].firstName);
    responsse("last mane is: " + arr[i].lastName);
    responsse("avg is: " + arr[i].age);
    responsse("avg is: " + arr[i].avg);
  }
}
