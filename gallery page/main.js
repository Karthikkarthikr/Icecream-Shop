let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('nav-toggle');
})

window.addEventListener('scroll', () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('nav-toggle');
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
const accordion = document.querySelectorAll('.contentBox');
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
        navs.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
        users.classList.remove('active');
        navs.classList.remove('active');
}

let users = document.querySelector('.users');
document.querySelector('#login-btn').onclick = () =>
{
    searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        users.classList.toggle('active');
        navs.classList.remove('active');
}


let navs = document.querySelector('.navs');
document.querySelector('#menu-btn').onclick = () =>
{
    searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        users.classList.remove('active');
        navs.classList.toggle('active');
}
