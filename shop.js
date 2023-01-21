let slideIndex = 2;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySLides");
  let dots = document.querySelectorAll(".dot_wrapper");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


let closeItem = document.querySelector(".close_cart"),
 shop_cart = document.querySelectorAll(".user-icon")[0],
 shoppingList =  document.querySelector(".shopping_cart");

closeItem.addEventListener('click',() => {
  shoppingList.style.transform="translateX(100%)"
  shoppingList.style.transition="1s"
})

shop_cart.addEventListener('click', ()=>{

  shoppingList.style.transform="translateX(0)"
  shoppingList.style.transition="1s"
})


let addLess = document.querySelectorAll(".addLess_tool"),
quantity = document.querySelector(".item_quantity")

addLess.forEach((item)=> item.addEventListener('click', ()=>{

if(item.classList.contains("add_item")){
  quantity.innerHTML= parseInt(quantity.innerHTML)+1
}
else{
  quantity.innerHTML= parseInt(quantity.innerHTML)-1

}

if(parseInt(quantity.innerHTML)<0){
  quantity.innerHTML= parseInt(quantity.innerHTML)+1
}
}))

let ItemRemoval= document.querySelector(".remove_item"),
cartItem=document.querySelector(".cart-item");

ItemRemoval.addEventListener('click', ()=>{
  cartItem.style.transform="translate(100%)"
  cartItem.style.transition="1s"
setInterval(() => {
  cartItem.remove()
}, 1000);

})

let addCart = document.querySelectorAll(".addTocart")
let Cart=document.querySelector(".cart-items")

addCart.forEach((item)=>{
item.addEventListener("click",()=>{

let _currentItem=item.closest(".newestProduct__item")
let _itemImage=_currentItem.querySelector("img")
let _itemPrice=_currentItem.querySelector(".price").innerHTML
let _itemName=_currentItem.querySelector("b").innerHTML
let _cartItem = document.createElement("div")
_cartItem.classList.add("cart-item")
Cart.appendChild(_cartItem)
let imgSrc=_itemImage.getAttribute("src")
let CartItemImg=document.createElement("img")
CartItemImg.setAttribute("src", imgSrc )
_cartItem.appendChild(CartItemImg)

let cartInfo=document.createElement("div")
_cartItem.appendChild(cartInfo)
cartInfo.classList.add("item_info")

let cartItemName = document.createElement("h4")
cartInfo.appendChild(cartItemName)
cartItemName.innerHTML=_itemName

let counting= document.createElement("span")
cartInfo.appendChild(counting)
counting.classList.add("item_val")
counting.innerHTML=_itemPrice

let removal = document.createElement("span")
removal.classList.add("remove_item")
_cartItem.appendChild(removal)
removal.innerHTML="remove"

})


})