//№1
let i = [],
    arr = [];
for (let i = 0; i < 50; i++) {
    arr[i] = (i + 1);
}
console.log(arr);

let n = [],
    newArr = [];
for (let n = 35; n > 7; n--) {
    newArr[n - 1] = n;
}
newArr.reverse();
console.log(newArr);

console.log('----------');

//№2
let arr2 = [], a = 10;
while(a++ < 90) {
    arr2.push(a);//разобраться с этой записью
}

arr2.reverse();//можно ли обернуть массив без reverse
document.write(arr2 + '<br />');

console.log('----------');

//№3
let b = 100,
    sum = 0;

for (let q = 0; q <= b; q++) {
    s = 0;
    for(let j = 1; j <= q; j++) s += j;

    console.log(s);
}

console.log('----------');

//№4 спросить про метод
a = 5,
sum = 0;

for (let p = 1; p <= a; p++) {
    k = 0;
    for(c = 1; c <= p; c++) k += c;

    console.log(k);
}

console.log('----------');

//№5
for (let y = 8; y < 57; y++) {
    if (y % 2 != 0) continue;
    console.log(y);
}

y = 7;
while (y++ < 56 ) {
    if (y % 2 != 0) continue;
    document.write('<br />' + y + '<br />');
}

console.log('----------');

//№6

for (i = 1; i <= 9; i++) {
    for(j = 1; j <= 9; j++) {
        document.write(i + '*' + j + '=' + (i * j) + '<br />');
    }
    document.write('-----------' + '<br />');
}

console.log('----------');

//№7
n = 1000;
i = 0;
for (i = 0; ; i++) {
    n /= 2;

    if (n <= 50) break;
    
    console.log(i + ': ' + n);
}

console.log(i);

//№9
let x = '-10 5 0 4 5 45 30 0 4 6 1 -8 9 4 65 4 3 5 7 89 7 10 1 36 8 57';
let z = x.split(' '),
    max = +z[0],
    min = +z[0];

/*z. sort(function(a,b){
   return a - b; 
});
console.log(z);

//for (i = 0; i < z.length; i++)

console.log(z[0]);
console.log(z[z.length-1]);*/

console.log(z);

for (let i=0; i < z.length; i++) {
    if (max < +z[i]) {
        max = +z[i];
    }
    if (min > +z[i]) {
        min = +z[i];
    }
}

console.log(max);
console.log(min);
