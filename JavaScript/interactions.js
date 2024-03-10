// INTERACTIONS

//MENU 
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');

const container = document.querySelector('#items-list');

menu.addEventListener('click', ()=>{
    container.classList.toggle('open-menu');
    close.classList.toggle('open-menu');
})

close.addEventListener('click', ()=>{
    close.classList.toggle('open-menu');
    container.classList.toggle('open-menu');
})

//NAVBAR
const nav = document.querySelector('#nav');

window.addEventListener('scroll', ()=>{
    const scroll = window.scrollY;

    if (scroll > 10) {
        nav.style.background = '#ffffff';
    }else{
        nav.style.background = 'transparent';
    }
})


//CART

const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('#cart');

cartIcon.addEventListener('click', ()=>{
    cart.classList.toggle('open-cart');
})