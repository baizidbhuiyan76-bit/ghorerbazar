/* =====================================================
   PAHARI FRUITS SHOP
   COMPLETE WEBSITE JAVASCRIPT
===================================================== */


/* ================= PRODUCT DATA ================= */

const productDetails = [

{
id:1,
name:"Pahari Mango",
category:"Mango",
price:450,
oldPrice:520,
rating:5,
reviews:128,
stock:35,
sku:"PFS-MNG-001",
brand:"Pahari Fresh",
description:"Fresh and naturally sweet hill mango, carefully selected for excellent taste and quality.",
image:"https://images.unsplash.com/photo-1605027990121-cbae9c2b3b8a?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1605027990121-cbae9c2b3b8a?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Hill Area",Type:"Fresh Mango",Weight:"1 KG",Quality:"Premium"}
},

{
id:2,
name:"Fresh Alphonso Mango",
category:"Mango",
price:650,
oldPrice:750,
rating:5,
reviews:96,
stock:25,
sku:"PFS-MNG-002",
brand:"Pahari Premium",
description:"Premium quality Alphonso mango with rich aroma, smooth texture and naturally sweet flavor.",
image:"https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Bangladesh",Type:"Alphonso Mango",Weight:"1 KG",Quality:"Premium"}
},

{
id:3,
name:"Green Hill Mango",
category:"Mango",
price:380,
oldPrice:450,
rating:4.5,
reviews:74,
stock:40,
sku:"PFS-MNG-003",
brand:"Hill Harvest",
description:"Fresh green mango collected from hill gardens, perfect for eating and making delicious recipes.",
image:"https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Hill Garden",Type:"Green Mango",Weight:"1 KG",Quality:"Fresh"}
},

{
id:4,
name:"Juicy Orange",
category:"Orange",
price:320,
oldPrice:390,
rating:5,
reviews:115,
stock:50,
sku:"PFS-ORG-001",
brand:"Nature Fresh",
description:"Juicy and refreshing oranges with a naturally sweet and slightly tangy flavor.",
image:"https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Hill Area",Type:"Orange",Weight:"1 KG",Quality:"Fresh"}
},

{
id:5,
name:"Mountain Orange",
category:"Orange",
price:350,
oldPrice:420,
rating:4.5,
reviews:68,
stock:42,
sku:"PFS-ORG-002",
brand:"Hill Harvest",
description:"Fresh mountain-grown oranges with excellent aroma and refreshing taste.",
image:"https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Mountain Area",Type:"Orange",Weight:"1 KG",Quality:"Fresh"}
},

{
id:6,
name:"Sweet Pineapple",
category:"Pineapple",
price:280,
oldPrice:350,
rating:5,
reviews:103,
stock:30,
sku:"PFS-PIN-001",
brand:"Pahari Fresh",
description:"Naturally sweet pineapple with juicy texture and delicious tropical flavor.",
image:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Hill Garden",Type:"Pineapple",Weight:"1 Piece",Quality:"Fresh"}
},

{
id:7,
name:"Hill Pineapple",
category:"Pineapple",
price:300,
oldPrice:360,
rating:5,
reviews:87,
stock:32,
sku:"PFS-PIN-002",
brand:"Hill Harvest",
description:"Fresh hill pineapple selected for its wonderful aroma and natural sweetness.",
image:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Hill Area",Type:"Pineapple",Weight:"1 Piece",Quality:"Premium"}
},

{
id:8,
name:"Organic Banana",
category:"Banana",
price:180,
oldPrice:220,
rating:5,
reviews:142,
stock:60,
sku:"PFS-BAN-001",
brand:"Nature Fresh",
description:"Fresh naturally grown bananas with soft texture and delicious sweet flavor.",
image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Bangladesh",Type:"Banana",Weight:"1 Dozen",Quality:"Organic"}
},

{
id:9,
name:"Fresh Red Apple",
category:"Other",
price:420,
oldPrice:500,
rating:5,
reviews:124,
stock:45,
sku:"PFS-APL-001",
brand:"Nature Fresh",
description:"Crisp and juicy red apples with a naturally sweet taste.",
image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Imported",Type:"Red Apple",Weight:"1 KG",Quality:"Premium"}
},

{
id:10,
name:"Green Apple",
category:"Other",
price:390,
oldPrice:460,
rating:4.5,
reviews:72,
stock:40,
sku:"PFS-APL-002",
brand:"Nature Fresh",
description:"Fresh crisp green apples with a refreshing sweet and sour taste.",
image:"https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Imported",Type:"Green Apple",Weight:"1 KG",Quality:"Fresh"}
},

{
id:11,
name:"Fresh Papaya",
category:"Other",
price:240,
oldPrice:300,
rating:5,
reviews:83,
stock:30,
sku:"PFS-PAP-001",
brand:"Pahari Fresh",
description:"Fresh ripe papaya with soft texture and naturally sweet flavor.",
image:"https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Local",Type:"Papaya",Weight:"1 KG",Quality:"Fresh"}
},

{
id:12,
name:"Sweet Watermelon",
category:"Other",
price:280,
oldPrice:340,
rating:5,
reviews:139,
stock:28,
sku:"PFS-WAT-001",
brand:"Nature Fresh",
description:"Refreshing and juicy watermelon perfect for hot summer days.",
image:"https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Local",Type:"Watermelon",Weight:"1 Piece",Quality:"Fresh"}
},

{
id:13,
name:"Fresh Dragon Fruit",
category:"Other",
price:550,
oldPrice:650,
rating:5,
reviews:91,
stock:22,
sku:"PFS-DRG-001",
brand:"Pahari Premium",
description:"Premium dragon fruit with beautiful appearance, refreshing taste and juicy texture.",
image:"https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Hill Area",Type:"Dragon Fruit",Weight:"1 KG",Quality:"Premium"}
},

{
id:14,
name:"Fresh Guava",
category:"Other",
price:220,
oldPrice:280,
rating:4.5,
reviews:77,
stock:35,
sku:"PFS-GUA-001",
brand:"Pahari Fresh",
description:"Fresh crunchy guava with excellent aroma and natural flavor.",
image:"https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Local",Type:"Guava",Weight:"1 KG",Quality:"Fresh"}
},

{
id:15,
name:"Pomegranate",
category:"Other",
price:480,
oldPrice:560,
rating:5,
reviews:86,
stock:27,
sku:"PFS-POM-001",
brand:"Pahari Premium",
description:"Fresh premium pomegranate with juicy ruby-red seeds.",
image:"https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Imported",Type:"Pomegranate",Weight:"1 KG",Quality:"Premium"}
},

{
id:16,
name:"Fresh Grapes",
category:"Other",
price:360,
oldPrice:430,
rating:5,
reviews:112,
stock:31,
sku:"PFS-GRP-001",
brand:"Nature Fresh",
description:"Fresh juicy grapes with naturally sweet flavor.",
image:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Imported",Type:"Grapes",Weight:"1 KG",Quality:"Fresh"}
},

{
id:17,
name:"Fresh Strawberry",
category:"Other",
price:620,
oldPrice:720,
rating:5,
reviews:98,
stock:20,
sku:"PFS-STR-001",
brand:"Pahari Premium",
description:"Premium fresh strawberries with bright color and delicious sweet taste.",
image:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Hill Area",Type:"Strawberry",Weight:"500 GM",Quality:"Premium"}
},

{
id:18,
name:"Fresh Coconut",
category:"Other",
price:190,
oldPrice:240,
rating:4.5,
reviews:64,
stock:40,
sku:"PFS-COC-001",
brand:"Pahari Fresh",
description:"Fresh coconut with delicious natural water and soft coconut meat.",
image:"https://images.unsplash.com/photo-1580984969071-a8da6d5c0e3a?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1580984969071-a8da6d5c0e3a?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Local",Type:"Coconut",Weight:"1 Piece",Quality:"Fresh"}
},

{
id:19,
name:"Fresh Lychee",
category:"Other",
price:520,
oldPrice:600,
rating:5,
reviews:106,
stock:24,
sku:"PFS-LYC-001",
brand:"Pahari Premium",
description:"Fresh seasonal lychees with juicy texture and sweet aromatic flavor.",
image:"https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Hill Area",Type:"Lychee",Weight:"1 KG",Quality:"Premium"}
},

{
id:20,
name:"Fresh Jackfruit",
category:"Other",
price:350,
oldPrice:430,
rating:5,
reviews:131,
stock:25,
sku:"PFS-JAC-001",
brand:"Hill Harvest",
description:"Fresh naturally sweet jackfruit with delicious aroma and soft juicy flesh.",
image:"https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=900&q=85",
images:[
"https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=900&q=85"
],
specs:{Origin:"Hill Area",Type:"Jackfruit",Weight:"1 Piece",Quality:"Fresh"}
}

];


/* ================= GLOBAL VARIABLES ================= */

let currentProduct = null;
let detailQuantity = 1;

let shoppingCart =
  JSON.parse(localStorage.getItem("pahariFruitsCart")) || [];

let appliedCoupon = null;

const DELIVERY_CHARGE = 60;

const coupons = {
  PAHARI10:10,
  FRUIT20:20,
  WELCOME15:15
};


/* ================= BASIC HELPERS ================= */

function money(value){
  return "৳" + Number(value).toLocaleString("en-BD");
}

function saveShoppingCart(){
  localStorage.setItem(
    "pahariFruitsCart",
    JSON.stringify(shoppingCart)
  );
}

function getProduct(id){
  return productDetails.find(p => p.id === Number(id));
}


/* ================= CART COUNTER ================= */

function getCartItemCount(){
  return shoppingCart.reduce(
    (total,item)=>total + item.quantity,
    0
  );
}

function updateCartCounter(){

  const counter = document.getElementById("cartCount");

  if(counter){
    counter.textContent = getCartItemCount();
  }

  const itemText = document.getElementById("cartItemText");

  if(itemText){
    const count = getCartItemCount();
    itemText.textContent =
      `${count} ${count === 1 ? "item" : "items"}`;
  }
}


/* ================= ADD TO CART ================= */

function addProductToCart(productId, quantity=1){

  const product = getProduct(productId);

  if(!product) return;

  const existing = shoppingCart.find(
    item => item.id === product.id
  );

  if(existing){
    existing.quantity += quantity;
  }else{
    shoppingCart.push({
      id:product.id,
      quantity:quantity
    });
  }

  saveShoppingCart();
  updateCartCounter();
  renderShoppingCart();

  showToast(`${product.name} added to cart 🛒`);
}


/* ================= REMOVE CART ================= */

function removeCartProduct(productId){

  shoppingCart =
    shoppingCart.filter(
      item => item.id !== Number(productId)
    );

  saveShoppingCart();
  renderShoppingCart();
  updateCartCounter();
}


/* ================= CART QUANTITY ================= */

function changeCartQuantity(productId,change){

  const item = shoppingCart.find(
    item => item.id === Number(productId)
  );

  if(!item) return;

  item.quantity += change;

  if(item.quantity <= 0){
    removeCartProduct(productId);
    return;
  }

  saveShoppingCart();
  renderShoppingCart();
  updateCartCounter();
}


/* ================= CART CALCULATION ================= */

function calculateCartSubtotal(){

  return shoppingCart.reduce((total,item)=>{

    const product = getProduct(item.id);

    return total + (
      product ? product.price * item.quantity : 0
    );

  },0);
}


function calculateCartDiscount(subtotal){

  if(!appliedCoupon) return 0;

  return Math.round(
    subtotal * appliedCoupon.percent / 100
  );
}


function calculateDelivery(subtotal){

  return subtotal >= 2000 ? 0 : DELIVERY_CHARGE;
}


/* ================= RENDER CART ================= */

function renderShoppingCart(){

  const container =
    document.getElementById("cartProducts");

  const empty =
    document.getElementById("emptyCart");

  const summary =
    document.getElementById("cartSummary");

  if(!container) return;

  if(shoppingCart.length === 0){

    container.innerHTML="";
    empty.style.display="flex";
    summary.style.display="none";

    updateCartCounter();

    return;
  }

  empty.style.display="none";
  summary.style.display="block";

  container.innerHTML =
    shoppingCart.map(item=>{

      const product = getProduct(item.id);

      if(!product) return "";

      return `
        <div class="cart-item">

          <img src="${product.image}" alt="${product.name}">

          <div>
            <h4>${product.name}</h4>

            <div class="cart-item-price">
              ${money(product.price)}
            </div>

            <div class="cart-quantity">
              <button onclick="changeCartQuantity(${product.id},-1)">−</button>
              <span>${item.quantity}</span>
              <button onclick="changeCartQuantity(${product.id},1)">+</button>
            </div>

          </div>

          <button
            class="remove-cart"
            onclick="removeCartProduct(${product.id})">
            ×
          </button>

        </div>
      `;

    }).join("");

  const subtotal =
    calculateCartSubtotal();

  const discount =
    calculateCartDiscount(subtotal);

  const delivery =
    calculateDelivery(subtotal);

  const total =
    subtotal + delivery - discount;

  document.getElementById("cartSubtotal").textContent =
    money(subtotal);

  document.getElementById("cartDelivery").textContent =
    delivery === 0 ? "FREE" : money(delivery);

  document.getElementById("cartDiscount").textContent =
    "-" + money(discount);

  document.getElementById("cartTotal").textContent =
    money(total);

  updateCartCounter();
}


/* ================= OPEN/CLOSE CART ================= */

function openShoppingCart(){

  renderShoppingCart();

  document
    .getElementById("cartOverlay")
    .classList.add("active");

  document.body.style.overflow="hidden";
}


function closeShoppingCart(){

  document
    .getElementById("cartOverlay")
    .classList.remove("active");

  document.body.style.overflow="";
}


/* ================= COUPON ================= */

document.getElementById("applyCoupon")
?.addEventListener("click",()=>{

  const input =
    document.getElementById("couponInput");

  const message =
    document.getElementById("couponMessage");

  const code =
    input.value.trim().toUpperCase();

  if(!coupons[code]){

    appliedCoupon=null;

    message.textContent =
      "Invalid coupon code.";

    message.style.color="#ef4444";

    renderShoppingCart();

    return;
  }

  appliedCoupon={
    code:code,
    percent:coupons[code]
  };

  message.textContent =
    `${code} applied successfully! ${coupons[code]}% discount.`;

  message.style.color="#16834b";

  renderShoppingCart();

});


/* ================= PRODUCT DETAILS ================= */

function openProductDetails(productId){

  const product =
    getProduct(productId);

  if(!product) return;

  currentProduct=product;
  detailQuantity=1;

  document.getElementById("detailName").textContent =
    product.name;

  document.getElementById("detailCategory").textContent =
    product.category;

  document.getElementById("detailPrice").textContent =
    money(product.price);

  document.getElementById("detailOldPrice").textContent =
    money(product.oldPrice);

  document.getElementById("detailDescription").textContent =
    product.description;

  document.getElementById("detailRating").innerHTML =
    "★★★★★ " +
    `<small>(${product.reviews} reviews)</small>`;

  document.getElementById("detailStock").textContent =
    `✓ ${product.stock} units available`;

  document.getElementById("detailSKU").textContent =
    `SKU: ${product.sku}`;

  document.getElementById("detailQuantity").textContent =
    detailQuantity;

  document.getElementById("detailMainImage").src =
    product.image;

  document.getElementById("detailMainImage").alt =
    product.name;

  document.getElementById("detailSpecs").innerHTML =
    Object.entries(product.specs)
      .map(([key,value])=>`
        <div class="spec-row">
          <span>${key}</span>
          <strong>${value}</strong>
        </div>
      `)
      .join("");

  document.getElementById("detailThumbnails").innerHTML =
    product.images.map((image,index)=>`
      <img
        src="${image}"
        class="${index===0 ? "active":""}"
        onclick="changeDetailImage(this,'${image}')"
        alt="${product.name}">
    `).join("");

  document
    .getElementById("productModal")
    .classList.add("active");

  document.body.style.overflow="hidden";
}


function closeProductModal(){

  document
    .getElementById("productModal")
    .classList.remove("active");

  document.body.style.overflow="";
}


function changeDetailImage(element,image){

  document.getElementById("detailMainImage").src =
    image;

  document
    .querySelectorAll(".detail-thumbnails img")
    .forEach(img=>img.classList.remove("active"));

  element.classList.add("active");
}


function changeDetailQuantity(change){

  detailQuantity += change;

  if(detailQuantity < 1)
    detailQuantity=1;

  if(detailQuantity > 20)
    detailQuantity=20;

  document.getElementById("detailQuantity").textContent =
    detailQuantity;
}


/* ================= DETAIL BUTTONS ================= */

document.getElementById("detailAddCart")
?.addEventListener("click",()=>{

  if(!currentProduct) return;

  addProductToCart(
    currentProduct.id,
    detailQuantity
  );

  closeProductModal();
});


document.getElementById("detailBuyNow")
?.addEventListener("click",()=>{

  if(!currentProduct) return;

  addProductToCart(
    currentProduct.id,
    detailQuantity
  );

  closeProductModal();

  setTimeout(()=>{
    openCheckout();
  },200);

});


/* ================= PRODUCT CARD CLICK ================= */

document
  .getElementById("productsGrid")
  ?.addEventListener("click",(event)=>{

    const card =
      event.target.closest(".product-card");

    if(!card) return;

    if(
      event.target.closest(".add-to-cart") ||
      event.target.closest(".wishlist-btn")
    ){
      return;
    }

    openProductDetails(card.dataset.id);

  });


/* ================= ADD CART BUTTONS ================= */

document
  .getElementById("productsGrid")
  ?.addEventListener("click",(event)=>{

    const button =
      event.target.closest(".add-to-cart");

    if(!button) return;

    event.stopPropagation();

    addProductToCart(
      Number(button.dataset.id),
      1
    );

  });


/* ================= WISHLIST ================= */

let wishlist =
  JSON.parse(localStorage.getItem("pahariWishlist")) || [];


function saveWishlist(){
  localStorage.setItem(
    "pahariWishlist",
    JSON.stringify(wishlist)
  );
}


function toggleWishlist(id){

  id=Number(id);

  if(wishlist.includes(id)){

    wishlist =
      wishlist.filter(item=>item!==id);

    showToast("Removed from wishlist");

  }else{

    wishlist.push(id);

    showToast("Added to wishlist ❤️");

  }

  saveWishlist();
  updateWishlistButtons();
}


function updateWishlistButtons(){

  document
    .querySelectorAll("[data-wishlist]")
    .forEach(button=>{

      const id =
        Number(button.dataset.wishlist);

      if(wishlist.includes(id)){

        button.classList.add("active");
        button.textContent="♥";

      }else{

        button.classList.remove("active");
        button.textContent="♡";

      }

    });

}


document
  .getElementById("productsGrid")
  ?.addEventListener("click",(event)=>{

    const button =
      event.target.closest(".wishlist-btn");

    if(!button) return;

    event.stopPropagation();

    toggleWishlist(button.dataset.wishlist);

  });


document.getElementById("detailWishlist")
?.addEventListener("click",()=>{

  if(currentProduct)
    toggleWishlist(currentProduct.id);

});


function openWishlist(){

  closeAccount();

  const items =
    wishlist
      .map(id=>getProduct(id))
      .filter(Boolean);

  if(items.length===0){

    showToast("Your wishlist is empty ❤️");

    return;
  }

  document
    .getElementById("ordersModal")
    .classList.add("active");

  document.querySelector("#ordersModal h2").textContent =
    "♡ My Wishlist";

  document.getElementById("ordersList").innerHTML =
    items.map(product=>`
      <div class="order-card">

        <div class="order-card-header">
          <strong>${product.name}</strong>
          <span class="order-status">${money(product.price)}</span>
        </div>

        <div class="order-items">
          ${product.description}
        </div>

        <button
          class="btn primary-btn"
          style="margin-top:10px"
          onclick="addProductToCart(${product.id},1)">
          Add to Cart
        </button>

      </div>
    `).join("");

  document.getElementById("noOrders").style.display="none";

}


/* ================= SEARCH & FILTER ================= */

const productBrands = {

  1:"Pahari Fresh",
  2:"Pahari Premium",
  3:"Hill Harvest",
  4:"Nature Fresh",
  5:"Hill Harvest",
  6:"Pahari Fresh",
  7:"Hill Harvest",
  8:"Nature Fresh",
  9:"Nature Fresh",
  10:"Nature Fresh",
  11:"Pahari Fresh",
  12:"Nature Fresh",
  13:"Pahari Premium",
  14:"Pahari Fresh",
  15:"Pahari Premium",
  16:"Nature Fresh",
  17:"Pahari Premium",
  18:"Pahari Fresh",
  19:"Pahari Premium",
  20:"Hill Harvest"

};


function applyProductFilters(){

  const search =
    document.getElementById("productSearch")
      .value.toLowerCase()
      .trim();

  const category =
    document.getElementById("categoryFilter").value;

  const brand =
    document.getElementById("brandFilter").value;

  const rating =
    Number(document.getElementById("ratingFilter").value);

  const min =
    Number(document.getElementById("minPrice").value) || 0;

  const maxInput =
    document.getElementById("maxPrice").value;

  const max =
    maxInput === "" ? Infinity : Number(maxInput);

  const sort =
    document.getElementById("sortFilter").value;


  let filtered =
    productDetails.filter(product=>{

      const searchMatch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        productBrands[product.id].toLowerCase().includes(search);

      const categoryMatch =
        category==="All" ||
        product.category===category;

      const brandMatch =
        brand==="All" ||
        productBrands[product.id]===brand;

      const ratingMatch =
        product.rating>=rating;

      const priceMatch =
        product.price>=min &&
        product.price<=max;

      return(
        searchMatch &&
        categoryMatch &&
        brandMatch &&
        ratingMatch &&
        priceMatch
      );

    });


  if(sort==="low")
    filtered.sort((a,b)=>a.price-b.price);

  if(sort==="high")
    filtered.sort((a,b)=>b.price-a.price);

  if(sort==="popular")
    filtered.sort((a,b)=>b.reviews-a.reviews);

  if(sort==="newest")
    filtered.sort((a,b)=>b.id-a.id);


  const grid =
    document.getElementById("productsGrid");

  const noProducts =
    document.getElementById("noProducts");


  document
    .querySelectorAll(".product-card")
    .forEach(card=>card.style.display="none");


  filtered.forEach(product=>{

    const card =
      document.querySelector(
        `.product-card[data-id="${product.id}"]`
      );

    if(card)
      card.style.display="block";

  });


  document.getElementById("resultCount").textContent =
    `${filtered.length} products found`;

  noProducts.style.display =
    filtered.length===0 ? "block" : "none";


  const filters=[];

  if(search)
    filters.push(`Search: ${search}`);

  if(category!=="All")
    filters.push(category);

  if(brand!=="All")
    filters.push(brand);

  if(rating>0)
    filters.push(`${rating}★+`);

  if(min>0)
    filters.push(`৳${min}+`);

  if(max!==Infinity)
    filters.push(`up to ৳${max}`);


  document.getElementById("activeFilters").textContent =
    filters.length ?
      "Active: " + filters.join(" • ") :
      "";

}


document
  .getElementById("applyFilters")
  ?.addEventListener(
    "click",
    applyProductFilters
  );


document
  .getElementById("productSearch")
  ?.addEventListener(
    "input",
    applyProductFilters
  );


document
  .getElementById("sortFilter")
  ?.addEventListener(
    "change",
    applyProductFilters
  );


document
  .querySelectorAll(".category-card")
  .forEach(button=>{

    button.addEventListener("click",()=>{

      const category =
        button.dataset.category;

      document.getElementById("categoryFilter").value =
        category;

      applyProductFilters();

      document
        .getElementById("products")
        .scrollIntoView({
          behavior:"smooth"
        });

    });

  });


document
  .getElementById("resetFilters")
  ?.addEventListener("click",()=>{

    document.getElementById("productSearch").value="";
    document.getElementById("categoryFilter").value="All";
    document.getElementById("brandFilter").value="All";
    document.getElementById("ratingFilter").value="0";
    document.getElementById("minPrice").value="";
    document.getElementById("maxPrice").value="";
    document.getElementById("sortFilter").value="default";

    applyProductFilters();

  });


/* ================= CHECKOUT ================= */

function openCheckout(){

  if(shoppingCart.length===0){

    showToast("Your cart is empty.");

    return;
  }

  renderCheckout();

  document
    .getElementById("checkoutModal")
    .classList.add("active");

  document.body.style.overflow="hidden";

}


function closeCheckout(){

  document
    .getElementById("checkoutModal")
    .classList.remove("active");

  document.body.style.overflow="";

}


function renderCheckout(){

  const container =
    document.getElementById("checkoutProducts");

  container.innerHTML =
    shoppingCart.map(item=>{

      const product =
        getProduct(item.id);

      if(!product) return "";

      return `
        <div class="checkout-product">
          <span>
            ${product.name}
            × ${item.quantity}
          </span>
          <span>
            ${money(product.price * item.quantity)}
          </span>
        </div>
      `;

    }).join("");


  const subtotal =
    calculateCartSubtotal();

  const discount =
    calculateCartDiscount(subtotal);

  const delivery =
    calculateDelivery(subtotal);

  const total =
    subtotal + delivery - discount;


  document.getElementById("checkoutSubtotal").textContent =
    money(subtotal);

  document.getElementById("checkoutDelivery").textContent =
    delivery===0 ? "FREE" : money(delivery);

  document.getElementById("checkoutDiscount").textContent =
    "-" + money(discount);

  document.getElementById("checkoutTotal").textContent =
    money(total);

}


/* ================= PLACE ORDER ================= */

document
  .getElementById("checkoutForm")
  ?.addEventListener("submit",(event)=>{

    event.preventDefault();

    if(shoppingCart.length===0){

      showToast("Your cart is empty.");

      return;
    }


    const name =
      document.getElementById("customerName").value.trim();

    const phone =
      document.getElementById("customerPhone").value.trim();

    const address =
      document.getElementById("customerAddress").value.trim();

    const payment =
      document.querySelector(
        'input[name="payment"]:checked'
      ).value;


    if(!name || !phone || !address){

      showToast("Please complete all required fields.");

      return;
    }


    const subtotal =
      calculateCartSubtotal();

    const discount =
      calculateCartDiscount(subtotal);

    const delivery =
      calculateDelivery(subtotal);

    const total =
      subtotal + delivery - discount;


    const order = {

      id:
        "PFS-" +
        Date.now().toString().slice(-8),

      date:
        new Date().toLocaleString(),

      customer:{
        name:name,
        phone:phone,
        email:
          document.getElementById("customerEmail").value,
        address:address
      },

      payment:payment,

      items:
        shoppingCart.map(item=>{

          const product =
            getProduct(item.id);

          return {
            id:item.id,
            name:product.name,
            price:product.price,
            quantity:item.quantity
          };

        }),

      subtotal:subtotal,
      delivery:delivery,
      discount:discount,
      total:total,

      status:"Processing"

    };


    const orders =
      JSON.parse(
        localStorage.getItem("pahariOrders")
      ) || [];


    orders.unshift(order);


    localStorage.setItem(
      "pahariOrders",
      JSON.stringify(orders)
    );


    document.getElementById("successOrderId").textContent =
      order.id;


    shoppingCart=[];

    appliedCoupon=null;

    saveShoppingCart();

    updateCartCounter();

    renderShoppingCart();

    closeCheckout();


    document
      .getElementById("orderSuccessModal")
      .classList.add("active");


    document.getElementById("checkoutForm").reset();

  });


function closeOrderSuccess(){

  document
    .getElementById("orderSuccessModal")
    .classList.remove("active");

}


/* ================= ORDERS ================= */

function openOrders(){

  closeAccount();

  const orders =
    JSON.parse(
      localStorage.getItem("pahariOrders")
    ) || [];


  document
    .getElementById("ordersModal")
    .classList.add("active");


  document.querySelector("#ordersModal h2").textContent =
    "📦 My Orders";


  if(orders.length===0){

    document.getElementById("ordersList").innerHTML="";
    document.getElementById("noOrders").style.display="block";

    return;
  }


  document.getElementById("noOrders").style.display="none";


  document.getElementById("ordersList").innerHTML =
    orders.map(order=>`

      <div class="order-card">

        <div class="order-card-header">

          <strong>${order.id}</strong>

          <span class="order-status">
            ${order.status}
          </span>

        </div>

        <div class="order-items">

          ${order.items.map(item=>
            `${item.name} × ${item.quantity}`
          ).join(", ")}

        </div>

        <div class="order-total">
          Total: ${money(order.total)}
        </div>

        <div class="order-items">
          Ordered: ${order.date}
        </div>

      </div>

    `).join("");

}


function closeOrders(){

  document
    .getElementById("ordersModal")
    .classList.remove("active");

}


/* ================= ACCOUNT ================= */

function openAccount(){

  const user =
    JSON.parse(
      localStorage.getItem("pahariUser")
    );


  document
    .getElementById("accountModal")
    .classList.add("active");


  if(user){

    document.getElementById("accountLoggedOut")
      .classList.add("hidden");

    document.getElementById("accountLoggedIn")
      .classList.remove("hidden");

    document.getElementById("profileName").textContent =
      user.name;

    document.getElementById("profileEmail").textContent =
      user.email;

  }else{

    document.getElementById("accountLoggedOut")
      .classList.remove("hidden");

    document.getElementById("accountLoggedIn")
      .classList.add("hidden");

  }

}


function closeAccount(){

  document
    .getElementById("accountModal")
    .classList.remove("active");

}


document
  .getElementById("accountButton")
  ?.addEventListener(
    "click",
    openAccount
  );


/* ================= ACCOUNT TABS ================= */

document
  .querySelectorAll("[data-account-tab]")
  .forEach(button=>{

    button.addEventListener("click",()=>{

      document
        .querySelectorAll("[data-account-tab]")
        .forEach(btn=>btn.classList.remove("active"));

      button.classList.add("active");

      const tab =
        button.dataset.accountTab;

      if(tab==="login"){

        document
          .getElementById("loginForm")
          .classList.remove("hidden");

        document
          .getElementById("registerForm")
          .classList.add("hidden");

      }else{

        document
          .getElementById("loginForm")
          .classList.add("hidden");

        document
          .getElementById("registerForm")
          .classList.remove("hidden");

      }

    });

  });


/* ================= REGISTER ================= */

document
  .getElementById("registerForm")
  ?.addEventListener("submit",(event)=>{

    event.preventDefault();

    const user={

      name:
        document.getElementById("registerName").value,

      email:
        document.getElementById("registerEmail").value,

      phone:
        document.getElementById("registerPhone").value

    };


    /*
      Demo only.
      Production website must use a secure backend
      and hashed passwords.
    */

    localStorage.setItem(
      "pahariUser",
      JSON.stringify(user)
    );


    showToast("Account created successfully!");

    openAccount();

  });


/* ================= LOGIN ================= */

document
  .getElementById("loginForm")
  ?.addEventListener("submit",(event)=>{

    event.preventDefault();

    const email =
      document.getElementById("loginEmail").value;


    const user =
      JSON.parse(
        localStorage.getItem("pahariUser")
      );


    if(user && user.email===email){

      showToast("Login successful!");

      openAccount();

    }else{

      showToast(
        "Demo login: please register first."
      );

    }

  });


function logoutUser(){

  localStorage.removeItem("pahariUser");

  closeAccount();

  showToast("Logged out successfully.");

}


function showProfile() {
  const user = JSON.parse(localStorage.getItem("pahariUser"));

  if (!user) {
    alert("Please login first.");
    return;
  }

  const profileHTML = `
    <div class="profile-view">
      <div class="profile-avatar">👤</div>

      <h2>My Profile</h2>

      <div class="profile-info">
        <div>
          <span>👤</span>
          <div>
            <small>Full Name</small>
            <strong>${user.name || "Not added"}</strong>
          </div>
        </div>

        <div>
          <span>✉️</span>
          <div>
            <small>Email</small>
            <strong>${user.email || "Not added"}</strong>
          </div>
        </div>

        <div>
          <span>📞</span>
          <div>
            <small>Phone</small>
            <strong>${user.phone || "Not added"}</strong>
          </div>
        </div>
      </div>

      <button class="btn primary-btn" onclick="closeProfileView()">
        Close
      </button>
    </div>
  `;

  let profileModal = document.getElementById("profileViewModal");

  if (!profileModal) {
    profileModal = document.createElement("div");
    profileModal.id = "profileViewModal";
    profileModal.className = "modal-overlay";

    profileModal.innerHTML = `
      <div class="profile-modal">
        <button class="modal-close" onclick="closeProfileView()">×</button>
        <div id="profileViewContent"></div>
      </div>
    `;

    document.body.appendChild(profileModal);
  }

  document.getElementById("profileViewContent").innerHTML = profileHTML;

  closeAccount();
  profileModal.classList.add("active");
}


function closeProfileView() {
  const profileModal = document.getElementById("profileViewModal");

  if (profileModal) {
    profileModal.classList.remove("active");
  }
}


/* ================= RESPONSIVE MENU ================= */

document
  .getElementById("responsiveMenuBtn")
  ?.addEventListener("click",()=>{

    document
      .getElementById("mainNav")
      .classList.toggle("active");

  });


document
  .querySelectorAll(".nav a")
  .forEach(link=>{

    link.addEventListener("click",()=>{

      document
        .getElementById("mainNav")
        .classList.remove("active");

    });

  });


/* ================= FAQ ================= */

document
  .querySelectorAll(".faq-item button")
  .forEach(button=>{

    button.addEventListener("click",()=>{

      button
        .closest(".faq-item")
        .classList.toggle("open");

    });

  });


/* ================= SUPPORT ================= */

function openCustomerSupport(){

  document
    .getElementById("supportOverlay")
    .classList.add("active");

  document.body.style.overflow="hidden";

}


function closeCustomerSupport(){

  document
    .getElementById("supportOverlay")
    .classList.remove("active");

  document.body.style.overflow="";

}


function switchSupportTab(tab){

  document
    .querySelectorAll("[data-support-tab]")
    .forEach(button=>{

      button.classList.toggle(
        "active",
        button.dataset.supportTab===tab
      );

    });


  document
    .querySelectorAll(".support-panel")
    .forEach(panel=>{
      panel.classList.remove("active");
    });


  const panelMap={
    contact:"supportContact",
    faq:"supportFaq",
    chat:"supportChat"
  };


  document
    .getElementById(panelMap[tab])
    .classList.add("active");

}


document
  .querySelectorAll("[data-support-tab]")
  .forEach(button=>{

    button.addEventListener("click",()=>{

      switchSupportTab(
        button.dataset.supportTab
      );

    });

  });


document
  .querySelectorAll(".support-faq button")
  .forEach(button=>{

    button.addEventListener("click",()=>{

      button
        .closest(".support-faq")
        .classList.toggle("open");

    });

  });


/* ================= LIVE CHAT ================= */

function sendChatMessage(){

  const input =
    document.getElementById("chatInput");

  const message =
    input.value.trim();

  if(!message) return;


  const container =
    document.getElementById("chatMessages");


  container.innerHTML += `
    <div class="chat-message user">
      ${escapeHTML(message)}
    </div>
  `;


  input.value="";


  setTimeout(()=>{

    container.innerHTML += `
      <div class="chat-message bot">
        Thanks for contacting us! Our support team will get back to you shortly. 😊
      </div>
    `;

    container.scrollTop =
      container.scrollHeight;

  },700);

}


document
  .getElementById("sendChat")
  ?.addEventListener(
    "click",
    sendChatMessage
  );


document
  .getElementById("chatInput")
  ?.addEventListener("keydown",(event)=>{

    if(event.key==="Enter")
      sendChatMessage();

  });


function escapeHTML(text){

  const div =
    document.createElement("div");

  div.textContent=text;

  return div.innerHTML;

}


/* ================= IMPORTANT PAGES ================= */

const importantPages={

about:{

title:"About Us",

html:`
<h2>About Pahari Fruits Shop</h2>

<p>
Pahari Fruits Shop is an online fruit shop focused on
providing fresh and quality fruits to customers.
</p>

<h3>Our Mission</h3>

<p>
Our mission is to make fresh fruits easily accessible
while maintaining product quality and customer satisfaction.
</p>

<h3>Our Values</h3>

<ul>
<li>Freshness</li>
<li>Quality</li>
<li>Honest service</li>
<li>Customer satisfaction</li>
</ul>
`

},

privacy:{

title:"Privacy Policy",

html:`
<h2>Privacy Policy</h2>

<p>
We respect your privacy and aim to protect the information
you provide while using our website.
</p>

<h3>Information We Collect</h3>

<p>
We may collect information such as name, phone number,
email and delivery address when you place an order.
</p>

<h3>How We Use Information</h3>

<p>
Information is used to process orders, provide delivery
and communicate with customers.
</p>

<h3>Data Protection</h3>

<p>
A production deployment should use HTTPS, secure server-side
storage, access control and appropriate security practices.
</p>
`

},

terms:{

title:"Terms & Conditions",

html:`
<h2>Terms & Conditions</h2>

<p>
By using Pahari Fruits Shop you agree to use the website
for lawful purposes.
</p>

<h3>Orders</h3>

<p>
Product availability and prices may change. Orders may
require confirmation before processing.
</p>

<h3>Payment</h3>

<p>
Available payment methods will be shown during checkout.
</p>

<h3>Customer Responsibility</h3>

<p>
Customers should provide accurate delivery information
and contact details.
</p>
`

},

shipping:{

title:"Shipping Policy",

html:`
<h2>Shipping Policy</h2>

<h3>Delivery Charge</h3>

<p>
Standard delivery charge is ৳60. Orders with subtotal
of ৳2,000 or more receive free delivery in this demo.
</p>

<h3>Delivery Time</h3>

<p>
Delivery time depends on location, product availability
and courier conditions.
</p>

<h3>Address</h3>

<p>
Customers should provide a complete and accurate delivery
address.
</p>
`

},

return:{

title:"Return & Refund Policy",

html:`
<h2>Return & Refund Policy</h2>

<h3>Return Request</h3>

<p>
If you receive damaged or incorrect products, contact
customer support as soon as possible.
</p>

<h3>Refund</h3>

<p>
Approved refunds are processed according to the applicable
business policy and payment method.
</p>

<h3>Important</h3>

<p>
Actual return and refund rules should be finalized before
launching the production store.
</p>
`

}

};


function openImportantPage(type){

  const page =
    importantPages[type];

  if(!page) return;

  document.getElementById("importantPageContent")
    .innerHTML=page.html;

  document
    .getElementById("importantPageModal")
    .classList.add("active");

}


function closeImportantPage(){

  document
    .getElementById("importantPageModal")
    .classList.remove("active");

}


/* ================= ADMIN ================= */

function openAdminPanel(){

  updateAdminStats();

  document
    .getElementById("adminModal")
    .classList.add("active");

}


function closeAdminPanel(){

  document
    .getElementById("adminModal")
    .classList.remove("active");

}


function updateAdminStats(){

  const orders =
    JSON.parse(
      localStorage.getItem("pahariOrders")
    ) || [];


  const user =
    localStorage.getItem("pahariUser");


  const sales =
    orders.reduce(
      (total,order)=>total+order.total,
      0
    );


  document.getElementById("adminProducts").textContent =
    productDetails.length;

  document.getElementById("adminOrders").textContent =
    orders.length;

  document.getElementById("adminCustomers").textContent =
    user ? "1" : "0";

  document.getElementById("adminSales").textContent =
    money(sales);

}


function adminAction(name){

  showToast(
    `${name} section selected. Backend required for real management.`
  );

}


/* ================= TOAST ================= */

function showToast(message){

  let toast =
    document.getElementById("siteToast");


  if(!toast){

    toast =
      document.createElement("div");

    toast.id="siteToast";

    toast.style.position="fixed";
    toast.style.bottom="55px";
    toast.style.right="20px";
    toast.style.background="#17221b";
    toast.style.color="white";
    toast.style.padding="12px 17px";
    toast.style.borderRadius="9px";
    toast.style.fontSize="12px";
    toast.style.zIndex="9999";
    toast.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

    document.body.appendChild(toast);

  }


  toast.textContent=message;
  toast.style.display="block";


  clearTimeout(window.toastTimer);


  window.toastTimer =
    setTimeout(()=>{

      toast.style.display="none";

    },2500);

}


/* ================= CART BUTTON ================= */

document
  .getElementById("cartButton")
  ?.addEventListener(
    "click",
    openShoppingCart
  );


document
  .getElementById("checkoutCartBtn")
  ?.addEventListener("click",()=>{

    closeShoppingCart();
    openCheckout();

  });


/* ================= MODAL OUTSIDE CLICK ================= */

document
  .querySelectorAll(".modal-overlay")
  .forEach(overlay=>{

    overlay.addEventListener("click",(event)=>{

      if(event.target!==overlay)
        return;

      overlay.classList.remove("active");

      document.body.style.overflow="";

    });

  });


document
  .getElementById("cartOverlay")
  ?.addEventListener("click",(event)=>{

    if(event.target === event.currentTarget)
      closeShoppingCart();

  });


/* ================= INITIALIZE ================= */

document.addEventListener("DOMContentLoaded",()=>{

  updateCartCounter();

  renderShoppingCart();

  updateWishlistButtons();

  applyProductFilters();

});
/* =========================================================
   FIXED FRUIT IMAGES
   Pahari Fruits Shop
   ========================================================= */

(function fixDisturbedFruitImages() {

    const fixedFruitImages = {
        "Pahari Mango":
            "https://loremflickr.com/700/500/mango,fruit?lock=101",

        "Sweet Pineapple":
            "https://loremflickr.com/700/500/pineapple,fruit?lock=102",

        "Hill Pineapple":
            "https://loremflickr.com/700/500/pineapple,fruit?lock=103",

        "Fresh Dragon Fruit":
            "https://loremflickr.com/700/500/dragonfruit,fruit?lock=104",

        "Fresh Guava":
            "https://loremflickr.com/700/500/guava,fruit?lock=105",

        "Fresh Coconut":
            "https://loremflickr.com/700/500/coconut,fruit?lock=106",

        "Fresh Lychee":
            "https://loremflickr.com/700/500/lychee,fruit?lock=107"
    };


    /* ---------------------------------------------------------
       1. PRODUCT DATA-তে image পরিবর্তন
       --------------------------------------------------------- */

    try {

        if (typeof productDetails !== "undefined" &&
            Array.isArray(productDetails)) {

            productDetails.forEach(function(product) {

                if (fixedFruitImages[product.name]) {
                    product.image = fixedFruitImages[product.name];
                }

            });

        }

    } catch (error) {
        console.log("Product image data update skipped:", error);
    }


    /* ---------------------------------------------------------
       2. PRODUCT CARD-এর image পরিবর্তন
       --------------------------------------------------------- */

    function updateProductCardImages() {

        const productCards = document.querySelectorAll(".product-card");

        productCards.forEach(function(card) {

            const cardText = card.innerText || "";

            Object.keys(fixedFruitImages).forEach(function(productName) {

                if (cardText.includes(productName)) {

                    const image = card.querySelector("img");

                    if (image) {

                        image.src = fixedFruitImages[productName];

                        image.alt = productName;

                        image.style.objectFit = "cover";

                        image.style.width = "100%";

                        image.style.height = "100%";

                        image.onerror = function() {
                            console.log(
                                "Image could not load:",
                                productName
                            );
                        };

                    }

                }

            });

        });

    }


    /* প্রথমবার */
    updateProductCardImages();


    /* Product আবার render হলে আবার ঠিক করবে */
    setTimeout(updateProductCardImages, 300);
    setTimeout(updateProductCardImages, 1000);
    setTimeout(updateProductCardImages, 2000);


    /* ---------------------------------------------------------
       3. Product Details Modal-এর image-ও ঠিক করা
       --------------------------------------------------------- */

    function updateModalImage() {

        const modal = document.querySelector(
            "#productDetailsModal"
        );

        if (!modal) return;

        const modalText = modal.innerText || "";

        Object.keys(fixedFruitImages).forEach(function(productName) {

            if (modalText.includes(productName)) {

                const images = modal.querySelectorAll("img");

                images.forEach(function(image) {

                    image.src = fixedFruitImages[productName];

                    image.alt = productName;

                    image.style.objectFit = "cover";

                });

            }

        });

    }


    setTimeout(updateModalImage, 500);
    setTimeout(updateModalImage, 1500);


    /* ---------------------------------------------------------
       4. DOM পরিবর্তন হলে আবার image ঠিক করবে
       --------------------------------------------------------- */

    const observer = new MutationObserver(function() {

        updateProductCardImages();

    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });


    console.log(
        "✅ Disturbed fruit images fixed successfully."
    );

})();
/* =========================================================
   ORDER CONFIRMATION OVERLAP FIX
   ========================================================= */

function closeOtherModalsBeforeOrderSuccess() {

    const possibleModals = [
        "#myOrdersModal",
        "#ordersModal",
        "#accountModal",
        "#customerAccountModal",
        "#checkoutModal",
        "#paymentModal"
    ];

    possibleModals.forEach(function(selector) {

        const modal = document.querySelector(selector);

        if (modal) {
            modal.classList.remove("active");
            modal.classList.remove("show");

            if (modal.style.display !== "none") {
                modal.style.display = "none";
            }
        }

    });

}


/* Order success দেখানোর সময় অন্য modal বন্ধ করবে */
document.addEventListener("click", function(event) {

    const button = event.target.closest(
        "#placeOrderBtn, #confirmOrderBtn, .place-order-btn"
    );

    if (button) {
        closeOtherModalsBeforeOrderSuccess();
    }

});
/* =========================================================
   ORDER CONFIRMATION OVERLAP FIX
   ========================================================= */

function closeOtherModalsBeforeOrderSuccess() {

    const possibleModals = [
        "#myOrdersModal",
        "#ordersModal",
        "#accountModal",
        "#customerAccountModal",
        "#checkoutModal",
        "#paymentModal"
    ];

    possibleModals.forEach(function(selector) {

        const modal = document.querySelector(selector);

        if (modal) {
            modal.classList.remove("active");
            modal.classList.remove("show");

            if (modal.style.display !== "none") {
                modal.style.display = "none";
            }
        }

    });

}


/* Order success দেখানোর সময় অন্য modal বন্ধ করবে */
document.addEventListener("click", function(event) {

    const button = event.target.closest(
        "#placeOrderBtn, #confirmOrderBtn, .place-order-btn"
    );

    if (button) {
        closeOtherModalsBeforeOrderSuccess();
    }

});
/* =========================================================
   VIEW MY ORDERS + ORDER SUCCESS OVERLAP FIX
   ========================================================= */

(function () {

    function hideOrderListBehindSuccess() {

        const elements = document.querySelectorAll(
            'div, section, aside, article, dialog'
        );

        elements.forEach(function (el) {

            if (el === document.body) return;

            const text = (el.innerText || "").trim();

            /* My Orders লেখা আছে এমন visible modal/overlay খুঁজবে */
            if (
                text.includes("My Orders") &&
                text.length < 3000 &&
                getComputedStyle(el).position === "fixed"
            ) {
                el.style.display = "none";
                el.classList.remove("active", "show", "open");
            }
        });
    }


    /* Order Confirmation আসার পর একটু পরে background My Orders বন্ধ করবে */
    setTimeout(hideOrderListBehindSuccess, 100);
    setTimeout(hideOrderListBehindSuccess, 500);
    setTimeout(hideOrderListBehindSuccess, 1000);


    /* View My Orders button চাপলে আগে Confirmation বন্ধ হবে */
    document.addEventListener("click", function (event) {

        const button = event.target.closest("button, a");

        if (!button) return;

        const buttonText = (button.innerText || "").trim().toLowerCase();

        if (buttonText.includes("view my orders")) {

            /* Order Success/Confirmation modal খুঁজে বন্ধ করবে */
            document.querySelectorAll(
                'div, section, aside, dialog'
            ).forEach(function (el) {

                const text = (el.innerText || "").trim().toLowerCase();

                if (
                    text.includes("thank you") &&
                    text.includes("order id") &&
                    text.includes("view my orders")
                ) {
                    el.style.display = "none";
                    el.classList.remove("active", "show", "open");
                }

            });

        }

    });

})();
/* =========================================================
   PROFILE BUTTON FIX
   PAHARI FRUITS SHOP
========================================================= */

(function fixProfileButton() {

    /* Profile দেখানোর function */
    window.showProfile = function () {

        const user = JSON.parse(
            localStorage.getItem("pahariUser")
        );

        if (!user) {
            showToast("Please register or login first.");
            return;
        }

        const phone = user.phone || "Not added";

        alert(
`My Profile

Name: ${user.name}
Email: ${user.email}
Phone: ${phone}`
        );
    };


    /* ---------------------------------------------------------
       Profile button-এর click detect করবে
       --------------------------------------------------------- */

    document.addEventListener("click", function (event) {

        const button = event.target.closest(
            "button, a, .account-menu-item, [data-account-action]"
        );

        if (!button) return;

        const text = (
            button.innerText ||
            button.textContent ||
            ""
        ).trim().toLowerCase();

        const action = (
            button.dataset.accountAction ||
            ""
        ).toLowerCase();


        /* Profile */
        if (
            action === "profile" ||
            text === "profile" ||
            text.includes("my profile")
        ) {

            event.preventDefault();
            event.stopPropagation();

            showProfile();

            return;
        }


        /* My Orders */
        if (
            action === "orders" ||
            text.includes("my orders")
        ) {

            event.preventDefault();
            event.stopPropagation();

            openOrders();

            return;
        }


        /* Wishlist */
        if (
            action === "wishlist" ||
            text.includes("wishlist")
        ) {

            event.preventDefault();
            event.stopPropagation();

            openWishlist();

            return;
        }


        /* Logout */
        if (
            action === "logout" ||
            text.includes("logout") ||
            text.includes("log out")
        ) {

            event.preventDefault();
            event.stopPropagation();

            logoutUser();

            return;
        }

    });


    console.log("✅ Profile button fixed successfully.");

})();
