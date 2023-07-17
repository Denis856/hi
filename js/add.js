
// Making Add To Cart

var result = document.querySelector('.result');
var baskItems = document.querySelector('.basket__items');
var baskItem = document.querySelector('.basket__item');
var resultClo = document.querySelector('.result');
var buy = document.querySelector('.basket__buy');
var resultC = document.querySelector('.result span');


if(document.readyState == 'loading'){
   document.addEventListener('DOMContentLoaded', ready);
} else {
   ready();
}

buy.onclick = () => {
   result.classList.add('active');
   baskItems.innerText = '';
};
resultClo.onclick = () => {
   result.classList.remove('active');
   basket.classList.remove('active');
};

// Making function

function ready(){
   // Remove Item From Cart
   var removeCartButtons = document.getElementsByClassName('basket__del');
   for(let i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener('click', removeCartItem);
   }
   // Quantity Change
   var quantityInputs = document.getElementsByClassName('basket__quantity');
   for(let i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener('change', quantityChange);
   }
   // Add To Cart
   var addCart = document.getElementsByClassName('item2__btn');
   for(let i = 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener('click', addCartClicked);
   }
   loadCartItems();
}

// Remove Cart Item

function removeCartItem(event){
   var buttonClicked = event.target;
   buttonClicked.parentElement.remove();
   updateTotal();
   saveCartItems();
}

// Quantity Change

function quantityChange(event){
   var input = event.target;
   if(isNaN(input.value) || input.value <= 0) {
      input.value = 1;
   }
   updateTotal();
   saveCartItems();
}

// Add To Cart

function addCartClicked(event){
   var button = event.target;
   var shopProducts = event.target.closest('.items__item2');
   var title = shopProducts.getElementsByClassName('item2__title')[0].innerText;
   var price = shopProducts.getElementsByClassName('item2__price')[0].innerText;
   var img = shopProducts.getElementsByClassName('item2__img')[0].src;
   addProductToCart(title, price, img);
   updateTotal();
   saveCartItems();
}

function addProductToCart(title, price, img){
   buy.classList.remove('active');
   var cartShopBox = document.createElement('div');
   cartShopBox.classList.add('basket__item');
   var cartItems = document.getElementsByClassName('basket__items')[0];
   var cartItemsNames = cartItems.getElementsByClassName('basket__title2');
   for(let i = 0; i < cartItemsNames.length; i++) {
      if(cartItemsNames[i].innerText == title) {
         alert("You already added this item to cart");
         return;
      }
   }
   var cartBoxContent = `

   <img src="${img}" alt="img" class="basket__img">
   <div class="basket__info">
      <p class="basket__title2">${title}</p>
      <div class="basket__info2">
         <p class="basket__price">${price}</p>
         <input type="number" value="1" class="basket__quantity">
      </div>
   </div>
   <button class="basket__del">Delete</button>

   `;
   cartShopBox.innerHTML = cartBoxContent;
   cartItems.appendChild(cartShopBox);
   cartShopBox.getElementsByClassName('basket__del')[0]
   .addEventListener('click', removeCartItem);
   cartShopBox.getElementsByClassName('basket__quantity')[0]
   .addEventListener('change', quantityChange);
   saveCartItems();
}

// Update To Total

function updateTotal(){
   var cartContent = document.getElementsByClassName('basket__items')[0];
   var cartBoxes = cartContent.getElementsByClassName('basket__item');
   var total = 0;
   if(cartBoxes.length == 0) {
      document.getElementsByClassName('total__price')[0].innerText = '$0';
      buy.classList.add('active');
   }
   for(let i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName('basket__price')[0];
      var quantityElement = cartBox.getElementsByClassName('basket__quantity')[0];
      var price = parseFloat(priceElement.innerText.replace('$', ''));
      var quantity = quantityElement.value;
      total += price * quantity;

      // If Price Contain Some Cents
      total = Math.round(total * 100) / 100;
      document.getElementsByClassName('total__price')[0].innerText = '$' + total;
      resultC.innerText = '$' + total;
      // Save total
      localStorage.setItem('cartTotal', total);
   }
}


// Keep Item In Cart

function saveCartItems() {
   var cartContent = document.getElementsByClassName('basket__items')[0];
   var cartBoxes = cartContent.getElementsByClassName('basket__item');
   var cartItems =[];

   for(let i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var titleElement = cartBox.getElementsByClassName('basket__title2')[0];
      var priceElement = cartBox.getElementsByClassName('basket__price')[0];
      var quantityElement = cartBox.getElementsByClassName('basket__quantity')[0];
      var productImg = cartBox.getElementsByClassName('basket__img')[0].src;

      var item = {
         title: titleElement.innerText,
         price: priceElement.innerText,
         quantity: quantityElement.value,
         productImg: productImg,
      };
      cartItems.push(item);
   }
   localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Load In Cart

function loadCartItems(){
   var cartItems = localStorage.getItem('cartItems');
   var cartBoxes = document.getElementsByClassName('basket__item');
   if(cartItems){
      cartItems = JSON.parse(cartItems);
      for(let i = 0; i < cartItems.length; i++) {
         var item = cartItems[i];
         addProductToCart(item.title, item.price, item.productImg);

         var cartBoxes = document.getElementsByClassName('basket__item');
         var cartBox = cartBoxes[cartBoxes.length - 1];
         var quantityElement = cartBox.getElementsByClassName('basket__quantity')[0];
         quantityElement.value = item.quantity;
      }
   }
   var cartTotal = localStorage.getItem('cartTotal');
   if(cartBoxes.length == 0) {
      document.getElementsByClassName('total__price')[0].innerText = '$0';
      document.getElementsByClassName('basket__buy').classList.remove('active');
      cartTotal = 0;
   }
   if(cartTotal) {
      document.getElementsByClassName('total__price')[0].innerText = '$' + cartTotal;
      document.getElementsByClassName('.result span')[0].innerText = '$' + cartTotal;
   }
}