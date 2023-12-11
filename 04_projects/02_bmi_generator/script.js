const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault;
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const bmi = document.querySelector('#bmi');
    if (height && weight) {
        bmi.innerHTML = `<span>${(weight/((height*height)/10000).toFixed(2))}</span>`;
    }
})