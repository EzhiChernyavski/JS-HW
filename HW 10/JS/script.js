(function onPageLoaded() {
    const input = document.querySelector('input[type=text]');
    const ul = document.getElementById('my-ul');
    ul.addEventListener('click', (check) => {
        check.target.tagName === 'li'
        check.target.classList.toggle('checked');  
    }, false);

    function createItem() {
        const li = document.createElement('li');
        const newItem = input.value;
        li.append(newItem);

        const inputValue = document.getElementById('my-ul');
        inputValue.appendChild(li);

        input.value = '';//????
    };

    input.addEventListener('keypress', (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createItem();
        }
    });
}())

