//Напишите ф-цию отправки различных уведомлений, например: уведомл. об успешной отправки формы, приветственное сообщение или сообщение об ошибке. Ф-ция должна приниматься сл. параметры: тип сообщения (type: error, alert, msg), текст сообщения (string). После вызова ф-ции в HTML- документе должно появится сообщение (<div>) соответствующего типа, и спустя 5 секунд должно пропадать. Каждый тип сообщения должен отличатся по стилю, например: фоновым цветом и шрифтом.


let notification = function(type, string) {

    let alert = document.createElement('div');
    string = document.createTextNode('Сообщение успешно     отправлено');

    alert.className = 'alert';

    alert.appendChild(string);
    document.body.appendChild(alert);

    let msg = document.createElement('div');
    let str = document.createTextNode('Добро пожаловать!');

    msg.className = 'msg';

    msg.appendChild(str);
    document.body.appendChild(msg);

    let error = document.createElement('div');
    let st = document.createTextNode('Сообщение не отправлено!');

    error.className = 'st';

    error.appendChild(st);
    document.body.appendChild(error);

    if (type = alert) {
        string = document.createTextNode('Сообщение успешно     отправлено');
    } if (type = msg) {
        string = document.createTextNode('Добро пожаловать!');
    } if (type = error) {
        string = document.createTextNode('Сообщение не отправлено!');
    } 
};



/*let alert = document.createElement('div');
let string = document.createTextNode('Сообщение успешно отправлено');

alert.className = 'alert';

alert.appendChild(string);
document.body.appendChild(alert);

let msg = document.createElement('div');
let str = document.createTextNode('Добро пожаловать!');

msg.className = 'msg';

msg.appendChild(str);
document.body.appendChild(msg);

let error = document.createElement('div');
let st = document.createTextNode('Сообщение не отправлено!');

error.className = 'st';

error.appendChild(st);
document.body.appendChild(error);*/


