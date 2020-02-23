//5.2
//№1
function sum(a, b, c) {
    return (a + b) - c;
}

console.log(sum(68, 59, 42));

//№2
function cubed(x) {
    return (x * x * x);
}

function squared(x) {
    return x * x;
}

console.log(cubed(9));
console.log(squared(9));
//можно ли их объединить в одну функцию

//№3
function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function  max(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8, 2));
console.log(max(6, 12));

//№4
function createArray(from, to) {
    let array = [];
    /*to = to || 0;
    from = from || 0;*/

    /*for(let i = 0; i <= to - from; i++) {
        array[i] = from;
    }*/

    for(let i = from; i <= to; i++) {
        array.push(i);
    }
    console.log(array);
}

createArray(25, 30);
//проработать аргументы



//№5
/*function isEven(even) {
    if (even % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let even = prompt('Введите число');
if (isEven(even)) {
    alert('Yes!');
} else {
    alert('No');
}

//№6
function getArr(even) {
    if (isEven(even)) {
        return true;
    }

    return false
}

alert(getArr(even));*/

//№7
function showPiramid(h) {
    let strN = '';

    for (let i = 1; i <= h; i++) { //4
        strN = '';

        for (let b = 1; b <= i; b++) {//..1..4
            /*if (s != undefined && s != ' ') {
                strN += s;
            } else {
                strN += i;
            }*/
            strN += i;
        }
        console.log(strN);
    }

    console.log(arguments);
};

showPiramid(prompt('Ведите число'), '*');


/*if (s != undefind || s != ' ') {
    console.log(strN[s]);
} else (console.log(strN));*/

//№8
/*function sum(a,b) {
    
}*/





//9
/*function sumNumber (num) {
    nub = String(num);

    let sum = 0;

    for(let i = 0; i < num.length; i++) {
        sum += +num[i];
    }

    console.log(sum);

    if(sum > 9) {
        sumNumber(sum);
    }
}

sumNumber(4653);

//№1
function card() {
    let name = prompt('Введите имя'),
        lastName = prompt('Введите фамилию');
        secondName = prompt('Введите фамилию'),
        group = prompt('Введите номер группы'),
        strArr = [];

    strArr.push('Домашнияя работа "Функции"');
    strArr.push('Выполнил студент гр. ' + group);
    strArr.push(lastName + ' ' + name + ' ' + secondName);

    //console.log(Math.max(strArr[0].length, strArr[1].length, strArr[2].length));

    let maxLength;
    for(let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > maxLength) maxLength = strArr[i].length;
    }

    console.log(strArr);
    console.log(maxLength);

    for(let i = 1; i <= strArr.length+2; i++) {
            if (i == 1 || i == strArr.length+2) { 
            console.log('*'.repeat(maxLength+4));
        } else {
            console.log(('* ' + strArr[i-2]) + ' ' .repeat(maxLength-strArr[i-2].length) + ' *');
        }
    }
}

card();*/
