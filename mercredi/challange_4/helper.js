import { response } from "../mardi/challange_1/helper.js    ";
export{showContacts,addData, showCity, collectCityNumber}
function showCity(list){
    for (let i = 0; i < list.length; i++) {
        response(list[i].ville);
    }
}
function collectCityNumber(list){
    let obj = {};
    
    for (let i = 0; i < list.length; i++) {
        let city = list[i].ville;
        if(!obj[city]){
            obj[city] = [];
        }
        obj[city].push(list[i].telephone);
    }
    return obj;
}


function showContacts(list){
    const keys = Object.keys(list[0]);
    for (let i = 0; i < list.length; i++) {
        response(' ================ '+ (i+1) + '===============');
        for (let j = 0; j < keys.length; j++) {
            let value = list[i][keys[j]];
            if (typeof value === "object") {
                showAddress(value);
            }else{
            response(keys[j]+ ":  " + value);
            }
        }
    }
}

function showAddress(obj){
    let keys = Object.keys(obj);
    console.log(keys);
    for (let i = 0; i < keys.length; i++) {
        response(keys[i]+ " :  " +obj[keys[i]]);
    }
}
function addData(list) {
    let date = {};
    date.day = Math.floor(Math.random() * 31) + 1;
    date.month = Math.floor(Math.random() * 12 ) + 1;
    date.year = Math.floor(Math.random() * (2022 - 2000 + 1)) + 2000;
    console.log(date); 
    for (let i = 0; i < list.length; i++) {
        list[i]['data'] = date;
    }
    return list;
}
