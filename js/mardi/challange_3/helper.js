import { response } from "../challange_1/helper.js";

export{ resume,longComment, avgRate, howManyRates, showObj, filterRating, showArray}

function avgRate(list) {
    let result = 0;
    for (let i = 0; i < list.length; i++) {
        result += list[i].rating;
    }
    result = result/list.length;
    return result.toFixed();
}
function howManyRates(list) {
    let obj = {};
    for (let i = 0; i < list.length; i++) {
        let rate = list[i].rating;
        if (!obj[rate]) {
            obj[rate] = 0;
        }
        obj[rate] += 1;
    }   
    return obj;
}

function showArray(list) {
    for (let i = 0; i < list.length; i++) {
        response('==========  '+ (i+1) + "  ==============");
        showObj(list[i]);
    }
}

function showObj(obj) {
    response("Unsername: " + obj.username);
    response("Rating: " + obj.rating);
    response("Comment: " + obj.comment);
    response("Date: " + obj.date);
}
function filterRating(list) {
    let list4rate = [];
    let list2rate = [];
    for (let i = 0; i < list.length; i++) {
        if(list[i].rating >= 4) {
            list4rate.push(list[i]);
        }else if(list[i].rating <= 2) {
            list2rate.push(list[i]);
        } 
    }
    return [
         list4rate,
         list2rate
    ];
}

function  longComment(list) {
    let test = list.sort((a, b) => b.comment.length - a.comment.length);
    showArray(test);
}
function resume(list) {
    let obj = {};
    obj['positive'] = [];
    obj['negative'] = [];
    obj['neutres'] = [];
    for (let i = 0; i < list.length; i++) {
        if(list[i].rating > 3){
            obj['positive'].push(list[i]) ;
        }if (list[i].rating < 3) {
            obj['negative'].push(list[i]);
        } if(list[i].rating == 3) {
            obj['neutres'].push(list[i]);
        }
    }
    response('===============  positive Rates  ==============');
    showArray(obj.positive);
    response('===============  negative Rates  ==============');
    showArray(obj.negative);
    response('===============  neutres Rates  ==============');
    showArray(obj.neutres);
}