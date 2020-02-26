//№1
let str = 'aaa@bbb@ccc'
console.log(str.replace(/(@)/g, '!'));

//№2
let date = new Date( '2025-12-31');

console.log(date);

console.log(date.toLocaleString('en', date));


//№3
let str2 = 'Я учу javascript!'

console.log(str2);

console.log(str2.substring(2, 6));

console.log(str2.substr(6, 10));

console.log(str2.slice(2, 6));

//№4
let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0

console.log(arr);

for(let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i],3)
    console.log(arr[i]);
};

let sqrArr = Math.sqrt(sum);

console.log(sqrArr);

//№5
let a = 3,
    b = 5,
    c = a - b;

    console.log(Math.abs(c));


//№6
dateNow = new Date();
//console.log(dateNow);

function fomatDate(date) {
    if (dd < 10) {
        dd += '0'
    };

    let mm = month.getDate();
    if (mm < 10) {
        mm += '0'
    };
};

/*let options = {
    month: 'numeric'
}*/

console.log(dateNow.toLocaleString('ru', /*options*/));

//№7
/*let phone = prompt('Введиье телефон в международном формате')

function checks(phone) {
    if ( phone = //)
};*/