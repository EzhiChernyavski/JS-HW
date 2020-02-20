//№1
let i = [];

for (i=1; i < 6; i++) {
    document.write(i);
};

//№2
let a = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];
let newArr = a.filter(function(num) {
    return num < 0;
});
newArr.sort(function(a, b){
    return a - b;
});//объяснение этого выражения(функции)


newArr2 = newArr.slice(1, 4);


document.write('<p>' + newArr2);

//№3
let arr = [];
for (let i=23; i < 58; i++) {
    arr[i] = i 
}

console.log(arr);

arr = []; i = 22;
while (i++ < 57) arr[i-1] = i;
console.log(arr);

//№4
let str = ['10', '20', '30', '40', '50', '235', '3000'],
    str2 = str.slice(0, 2)
    console.log(str2);

//№5
let week = ['ПН', 'Вт', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < week.length; i++) {
    /*if (week[i] == 'СБ' || week[i] == 'ВС') {
        document.write(week[i].bold());
    } не работает */
    console.log(week[i]);
}

//#8
let ref = [12, false, 'Текст', 4, 2, -5, 0], n = ref.length,
    ref2 = [];
//ref.reverse();
while (n-- != 0)  {
    ref2.push(ref[n]);
}

console.log(ref2);


