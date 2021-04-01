let addtocart = document.querySelector('.add-to-cart');
let addtocartdiv = document.querySelector('.add-to-cart-div')
let btnCart = document.createElement('button')
let cartdiv = document.createElement('div');

addtocart.addEventListener('click', function(){
 //// pop up div
 
 cartdiv.innerHTML = "1 Item added | $29.99 USD"
 addtocartdiv.appendChild(cartdiv)
 cartdiv.classList.add('cartdiv')
 //// button add to cart
 
 btnCart.innerHTML="Shopping cart"
 cartdiv.appendChild(btnCart)
 btnCart.classList.add('btnCart')

} , { once: true } )
///
btnCart.addEventListener('click' , function(){
 document.location.href = 'cart.html';
})




