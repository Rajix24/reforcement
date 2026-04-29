export { showArray, response, showObj}

function showArray(list){
    for (let i = 0; i < list.length; i++) {
        response(' ================ '+ (i + 1) + '===============');
        showObj(list[i]);
    }
}

function response(variable) {
  const para = document.createElement("p");
  para.textContent = variable;
  container.appendChild(para);
}

function showObj(obj){
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (typeof obj[keys[i]] == "object") {
            showObj(obj[keys[i]]);
            response('=======================');
        }else{
        response(keys[i]+ " :  " +obj[keys[i]]);
        }
    }
}