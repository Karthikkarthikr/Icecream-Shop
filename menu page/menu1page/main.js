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

let shoppingCart = document.querySelector('.cart');
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

const cartIcon = document.querySelector("#cart-btn");

const cart = document.querySelector(".cart");


const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener('click',()=>
{
    cart.classList.add('active');
});
closeCart.addEventListener('click',()=>
    {
        cart.classList.remove('active');
    });



if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded',start);
}else{
    start();
}


function start(){
    addEvents();
}

function update(){
    addEvents();
    updateTotal();
}

function addEvents(){
    let cartRemove_btns = document.querySelectorAll('.cart-remove');
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) =>{
        btn.addEventListener("click",handle_removeCartItem);
    });

    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach((input) =>
    {
        input.addEventListener("change",handle_changeItemQuantity);

    });

    let addCart_btns = document.querySelectorAll(".add-cart");
    addCart_btns.forEach((btn) =>{
        btn.addEventListener("click",handle_addCartItem);
    });

    const buy_btn = document.querySelector(".btn-buy");
    buy_btn.addEventListener("click", handle_buyOrder);
}

let itemsAdded = [];

function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    console.log(title,price,imgSrc);

    let newToAdd ={
        title,
        price,
        imgSrc,
    };

    if (itemsAdded.find((el) => el.title == newToAdd.title)) {
        alert("This Item Is Already Exist!");
        return;
      } else {
        itemsAdded.push(newToAdd);
      }

    let cartBoxElement = CartBoxComponent(title,price,imgSrc);
    let newNode =document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}



function handle_removeCartItem(){
    this.parentElement.remove();
    itemsAdded = itemsAdded.filter(
        (el) =>
          el.title !=
          this.parentElement.querySelector(".cart-product-title").innerHTML
      );
    update();
}


function handle_changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1){
        this.value = 1;
    }
    this.value = Math.floor(this.value);

    update();
}

 function handle_buyOrder() {
 if (itemsAdded.length <= 0) {
     alert("There is No Order to Place Yet! \nPlease Make an Order first.");
    return;
  }
 const cartContent = cart.querySelector(".cart-content");
 cartContent.innerHTML = "";
 alert("Your Order is Placed Successfully :)");
 itemsAdded = [];
    update();
}
 
  
function updateTotal(){
    let cartBoxes = document.querySelectorAll('.cart-box');
    const totalElement = cart.querySelector('.total-price');
    let total = 0;
    cartBoxes.forEach((cartBox) =>
    {
        let priceElement = cartBox.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("$",""));
        let quantity = cartBox.querySelector('.cart-quantity').value;
        total += price * quantity;
    });

    total = total.toFixed(2);

    // total = Math.round(total * 100) / 100;
    totalElement.innerHTML = "$" + total;
}


function  CartBoxComponent(title,price,imgSrc){
    return `
    <div class="cart-box">
  <img src=${imgSrc} alt="" class="cart-img">
   <div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity">
   </div>
   <i class='bx bxs-trash cart-remove'></i>
  </div>`;
}

   