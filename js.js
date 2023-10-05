let but = document.querySelector('.sub');
let inp = document.querySelector('.input');
let num = document.querySelector('.sum')
let start = 10000.534;

but.addEventListener('click', ()=> {
    let value = inp.value;
    num.innerHTML = `${start - value} ¥`;
    inp.value = '';
})