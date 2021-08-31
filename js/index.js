const box = document.querySelector('#box');
const form = document.querySelector('form');
const textArea = document.querySelector('textarea');
const btnSubmit = document.querySelector('form #btnAdd');
const btnReset = document.querySelector('form #reset');
const list = document.querySelector('#list .tasks');


btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    add();
    clear();
});

btnReset.addEventListener('click', e => {
    e.preventDefault();
    reset();
});

function add() {
    const content = document.createElement('li');
    content.innerHTML = textArea.value;
    content.style.listStyle = 'none'
    content.style.marginBottom = '10px';
    content.style.fontWeight = 'bold';

    if (textArea.value === '') {
        const error = document.createElement('p');
        error.innerHTML = 'You must write a task';
        error.classList.add('error');
        list.appendChild(error);

        setTimeout(() => {
            error.remove();
        }, 3000);
    } else {
        list.appendChild(content);
    }

    console.log(content);
}

function clear() {
    textArea.value = '';
}

function reset() {
    const tasks = list;

    if (tasks.children) {
        tasks.innerHTML = '';
    }

}