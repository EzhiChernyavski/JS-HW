/*let name = prompt('Ваше имя', '') 
let age = prompt('Возраст будет в этом году, ');
let city = prompt('Город проживания', '');
let phone = prompt('Ваш телефон', '');
let email = prompt('Эл. адрес', '');
let company = prompt('Компания', '');

document.write('<p>' + 'Меня зовут ' + name + '.' + ' Мне ' + age + ' лет.' + ' Я проживаю в городе ' + city +  ' и работаю в компании ' + company + '.' + ' Мои контактные данные: ' + phone + ', ' + email + '.');


let nowYear = 2020;
let year = nowYear - age;

document.write('<p>' + name + ', родился ' + year + ' году.');*/


//№3
let num = prompt('Введите 6 чисел');
let num1 = + num[0] + + num[1] + + num [2];
let num2 = + num[3] + + num[4] + + num [5]; 

console.log(num1 == num2 ? 'Yes' : 'No');

/*№4
let a = prompt('Введите число');

console.log(a > 0 ? 'True' : 'False');


//let massage = (a > 0) ? console.log('True') : console.log('False');

//№5
let a = 10,
    b = 2;
let sum = a + b,
    dif = a - b,
    comp = a * b,
    quo = a / b;

console.log(sum);
console.log(dif);
console.log(comp);
console.log(quo);

if (sum > 1) {
    console.log(sum**2);
}

//№6

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('True');
} else {
    console.log('False');
}



//№7
let n = prompt('Сколько сейчас минут?');
if (n >=0 && n <= 15) {
    alert('Первая четверть часа');
} else if (n > 15 && n <= 30) {
    alert('Вторая четверь часа');
} else if (n > 30 && n <= 45) {
    alert('Третья четверь часа');
} else if (n > 45 && n <= 59) {
    alert('Четвертая четверь часа');
}

//№8
let day = prompt('Какое сегодня число?');
if (day >= 1 && day <= 10) {
    alert('Первая декада месяца');
} else if (day > 10 && day <= 20) {
    alert('Вторая декада месяца');
} else if (day > 20 && day <= 31) {
    alert('Третья декада месяца');
}*/


//№9
let number = prompt('Введите число');
    years = number / 365,
    mounths = number / 31,
    weeks = number / 7,
    hours = number * 24,
    minutes = number * 1440,
    seconds = number * 86400;

if (years < 1) {
    console.log(years, 'Меньше года');
} else if (years > 1) {
    console.log(years);
}
if (mounths < 1) {
    console.log(mounths, 'Меньше месяца');
} else if ( mounths > 1) {
    console.log(mounths);
}
if (weeks < 1) {
    console.log(weeks, 'Меньше недели');
} else if (weeks > 1) {
    console.log(weeks);
}
console.log(hours);
console.log(minutes);
console.log(seconds);


//№10

