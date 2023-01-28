
// ------------------------slider

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



// ---------------------shop cart


// --------------------------------open/close shop 

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


// --------------------------creating object from current item

    function createObject(targetItem){
      let _currentItem=targetItem.closest(".newestProduct__item")
      _itemImage=_currentItem.querySelector("img").getAttribute("src")
      let itemPrice=_currentItem.querySelector(".price").innerHTML
      _itemPrice=parseInt(itemPrice.substr(1,itemPrice.length)) 
      let _itemName=_currentItem.querySelector("b").innerHTML
    
    return {
      image: _itemImage,
      price: _itemPrice,
      name: _itemName};
    }

let cartItem, 
    quantityNum, 
    removal,
    CartItemImg,
    _itemImage,
    sumPrice,
    addItem,
    itemPrice;

// ----------------------------empty bascket

  function showBascket(){
    let editInfo=document.querySelector(".edit_tools")
    let emptyBasket=document.querySelector(".empty_cart")
        if(CartIitemsList.length<=0){
            emptyBasket.style.display="block"
            editInfo.style.width="0"
            totalprice=0
            sumPrice.innerHTML=totalprice
          } else if(CartIitemsList.length>0){
            emptyBasket.style.display="none"
            editInfo.style.width="initial"}
  }


  function createElement(image, name, price){

    cartItem = document.createElement("div")
    cartItem.classList.add("cart-item")
    cartItem.innerHTML=`  
                      <img src=${image} alt="">
                      <div class="item_info">
                        <h4>${name}</h4>
                        <span class="item_val">$ <span class="val"> ${price}</span>   </span> <br>
                        <div class="theCounting">
                            <span class="lessen_item addLess_tool">-</span>
                            <span class="item_quantity">1</span>
                            <span class="add_item addLess_tool">+</span>
                        </div>
                      </div>
                      <span class="remove_item">remove</span>`
    Cart.appendChild(cartItem)
   
    removal= cartItem.querySelector(".remove_item")
     addItem=cartItem.querySelector(".add_item")
     lessItem=cartItem.querySelector(".lessen_item ")
     quantityNum=cartItem.querySelector(".item_quantity")
    itemPrice=parseInt(cartItem.querySelector(".val").innerHTML)
    sumPrice=document.querySelector(".sub_val")
    totalprice= totalprice+itemPrice
    sumPrice.innerHTML=totalprice
   
  }

// --------------------------------add/less item quantity

  function Add(addButton, quantity, price) {
   
  addButton.addEventListener("click", ()=>{
    quantity.innerHTML=parseInt(quantity.innerHTML)+1
    totalprice= totalprice+price
    sumPrice.innerHTML=totalprice
    
    })

  }
  function Less(lessButton,quantity, price){
    lessButton.addEventListener("click", ()=>{
      if((parseInt(quantity.innerHTML)>1)){
      quantity.innerHTML=parseInt(quantity.innerHTML)-1
      totalprice=totalprice-price
      sumPrice.innerHTML=totalprice}
  
      else if(parseInt(quantity.innerHTML)<1) {
        quantity.innerHTML=parseInt(quantity.innerHTML)+1
      
      }    
    
    })

  }
  

  let addCart = document.querySelectorAll(".addTocart")
  let Cart=document.querySelector(".cart-items")
  let checkeditem="img/check-mark.png"
  let uncheckeditem="img/shopping-bag.png"
  let CartIitemsList=[]
let totalprice=0
 
// ----------------------------------item removal
  function removeItem(cartItem, removeButton, itemList, currentItem) {

        removeButton.addEventListener('click', ()=>{
        cartItem.style.transform="translate(100%)"
        cartItem.style.transition="1s"
        itemList.children[0].setAttribute("src", uncheckeditem)
       
          setInterval(() => {
         cartItem.remove() 
          showBascket()
          }, 1000);
  
        for(i=0;i<CartIitemsList.length;i++){

          if(CartIitemsList[i].image=== currentItem){
        
          totalprice=totalprice-(CartIitemsList[i].price*parseInt(quantityNum.innerHTML))
          CartIitemsList.splice(i,1)
          sumPrice.innerHTML=totalprice
          }



         }   
      })
    }


  addCart.forEach((item)=>{
    item.addEventListener("click",()=>{
      
        let itemAdded =item.children[0].getAttribute("src") 
        if(itemAdded===uncheckeditem){
        item.children[0].setAttribute("src", checkeditem)
          
        let obj=createObject(item)
        createElement(obj.image,obj.name,obj.price)
        CartIitemsList.push(obj)

     
        
        Add(addItem,quantityNum, itemPrice)
        Less(lessItem,quantityNum, itemPrice)

       
        removeItem(cartItem, removal, item, _itemImage)

       
        }  else if(itemAdded===checkeditem){
        return;
    }
      showBascket() 
    })
  })

  

