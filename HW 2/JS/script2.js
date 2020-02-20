/*//№1
let num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
    num += 1;
    num -= 1;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
    console.log(num);

//№2
let hour = prompt('Введите час');
    minute = prompt('Введите минуты');
    seconds = prompt('Введите секунды');

console.log(hour + ':' + minute + ':' + seconds + "\'");*/

//№3
let sim = 'abcde';

if (sim[0] == 'a') {
    console.log('Да');
} else {
    console.log('Нет');
}

//4
let str = 'В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек';

document.write('богатый купец');

//№5
let cif = '468';
let sum = + cif[0] + + cif[1] + + cif[2];

console.log(sum);

//№6
let a = 10;
console.log((a == 10 ? 'True' : 'False'));

if (a == 11) {
    console.log('True');
} else {
    console.log('False');
}

//№7
let b = 'test';
console.log(b == 'test' ? 'True' : 'False');

if (b == 3) {
    console.log('True');
} else {
    console.log('False');
}

//№8
let c = 1,
    d = 3,
    sum1 = c + d,
    dif = c - d;

console.log(c <= 1 && d >= 3 ? c + d : c - d);

if (c <= 1 && d >= 3) {
    console.log(sum1);
} else {
    console.log(dif);
}

//№9
/*let name = prompt('Ваше имя'),
    login = prompt('Введите логин'),
    pass = prompt('Ваш пароль');

if (login == 'admin' && pass == 'nimda') {
    alert('Добро пожаловать ' + name + ' !' + ' Вы успешно вошли на сайт' );
} else {
    alert(name + 'вы неверно ввели логин или пароль!');
}*/

//№10
let month = prompt('Какой месяц по счету?');
let season,
    seasonName;

if (month == 1 || month == 2 || month == 12) {
    alert(season = 1);
} else if (month == 3 || month == 4 || month == 5) {
    alert(season = 2);
} else if (month == 6 || month == 7 || month == 8) {
    alert(season = 3);
} else if (month == 9 || month == 10 || month == 11) {
    alert(season = 4);
}

switch (season) {
    case 1:
        seasonName = 'Winter';
    break;
    case 2:
        seasonName = 'Spring';
    break;
    case 3:
        seasonName = 'Summer';
    break;
    case 4:
        seasonName = 'Autumn';
    break
}

alert(seasonName);