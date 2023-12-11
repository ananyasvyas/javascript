const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button'); // iterable node list
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id;
    })
});