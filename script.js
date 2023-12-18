// Script for navigation bar
const bar = document.getElementById('toggle');
const nav = document.getElementById('navlink');
const close = document.getElementById('close');
if (toggle) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}


if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}