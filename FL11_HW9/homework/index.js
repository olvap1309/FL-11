function getNumbers(str) {
    let arr = [];
    for (let char of str) {
        if (!isNaN(char)) {
            arr.push(1 * char);
        }
    }
    return arr;
}

function findTypes(...args) {
    let type;
    let obj = {};
    for (let i of args) {
        type = typeof i;
        obj.hasOwnProperty(type) ? obj[type] += 1 : obj[type] = 1;
    }
    return obj;
}

function executeforEach(arr, fn) {
    for (let i of arr) {
        fn(i);
    }
}

function mapArray(arr, fn) {
    let arrTrans = [];
    executeforEach(arr, function (element) {
        arrTrans.push(fn(element));
    });
    return arrTrans;
}

function filterArray(arr, fn) {
    let arrFilter = [];
    executeforEach(arr, function (element) {
        if (fn(element)) {
            arrFilter.push(element);
        }
    });
    return arrFilter;
}

function showFormattedDate(date) {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    return `Date: ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

function canConvertToDate(date) {
    date = new Date(date);
    return !isNaN(date.getDate());
}

function daysBetween(date1, date2) {
    const day = 86400000;
    return Math.round((date2.getTime() - date1.getTime()) / day);
}

function getAmountOfAdultPeople(data) {
    const year = 365.2425;
    const fullAge = 18;
    let result = filterArray(data, function(element) {      
        return daysBetween(new Date(element['birthday']), new Date()) >= year * fullAge; 
    });
    return result.length;
}

function keys(obj) {
    let arr = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            arr.push(i);        
        }
    }
    return arr;
}

function values(obj) {
    let arr = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            arr.push(obj[i]);
        }
    }
    return arr;
}
