let menu = document.querySelector('.bx-menu');
let navbr = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('bx-x');
    navbr.classList.toggle('nav-toggle');
})

window.addEventListener('scroll', function(){
    menu.classList.remove('bx-x');
    navbr.classList.remove('nav-toggle');
})
const header = document.querySelector('header');
window.onscroll = function (){
    if(document.documentElement.scrollTop > 5){
        header.style.height = '70px';
        header.style.backgroundColor = '#fff';
    }else{
        header.style.height = '100px';
        header.style.backgroundColor = '#fff';
    }
}
let accordion = document.querySelectorAll('.contentBox');
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
       searchForm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        users.classList.remove('active');
        navBar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
        users.classList.remove('active');
        navBar.classList.remove('active');
}

let users = document.querySelector('.users');
document.querySelector('#login-btn').onclick = () =>
{
    searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        users.classList.toggle('active');
        navBar.classList.remove('active');
}


let navBar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        users.classList.remove('active');
        navBar.classList.toggle('active');
}