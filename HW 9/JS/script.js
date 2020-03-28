//Напишите ф-цию отправки различных уведомлений, например: уведомл. об успешной отправки формы, приветственное сообщение или сообщение об ошибке. Ф-ция должна приниматься сл. параметры: тип сообщения (type: error, alert, msg), текст сообщения (string). После вызова ф-ции в HTML- документе должно появится сообщение (<div>) соответствующего типа, и спустя 5 секунд должно пропадать. Каждый тип сообщения должен отличатся по стилю, например: фоновым цветом и шрифтом.


let notification = function(type, string) {
     
    let elem = document.createElement('div');

    switch (type) {
        case 'error':
            elem.className = 'error';
            elem.style.cssText='width: 300px; height: 50px; background-color: red; text-align: center; line-height: 50px; border-radius: 15px; text-transform: uppercase; margin-left: auto; font-weight: 700; ';
            break;
        case 'alert':
            elem.className = 'alert';
            elem.style.cssText='width: 300px; height: 50px; background-color: green; text-align: center; line-height: 50px; border-radius: 15px; margin-left: auto;';
            break;
        case 'msg':
            elem.className = 'msg';
            elem.style.cssText='width: 300px; height: 50px; background-color: #f5d745; text-align: center; line-height: 50px; border-radius: 15px; margin-left: auto; font-style: italic;';
            break;
    }
    


    elem.innerHTML = string;

    let block = document.createElement('div');

    block.appendChild(elem);
    document.body.appendChild(elem);


    setTimeout(function() {
        elem.style.opacity = 1;
        let opacity = elem.style.opacity;

        let sI = setInterval(function(){
            opacity = opacity-0.1;
            elem.style.opacity = opacity;


            if (elem.style.opacity == 0.1) {
                document.body.removeChild(elem);
                clearInterval(sI);
            }

        }, 200);
    }, 5000);
}

setTimeout(function() {
    notification('error', 'Ошибка!');
}, 2000);

setTimeout(function() {
    notification('alert', 'Вы вошли в свой личный кабинет.');
}, 3000);

setTimeout(function() {
    notification('msg', 'Добро пожаловать!')
}, 4000);







