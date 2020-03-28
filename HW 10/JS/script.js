(function onPageLoaded() {


    const input = document.querySelector('input[type=text]');
    const ul = document.querySelector('ul#myUL');
    ul.addEventListener('click', (check) => {
        check.target.tagName === 'li'
        check.target.classList.toggle('checked');  
    }, false);

    function createItem() {
        const li = document.createElement('li');
        const newItem = input.value;
        li.append(newItem);

        const inputValue = document.getElementById('myUL');
        inputValue.appendChild(li);

        input.value = '';
    };

    input.addEventListener('keypress', (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createItem();
        }
    });
}())

